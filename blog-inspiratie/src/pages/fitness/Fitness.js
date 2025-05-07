import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Fitness = () => {
  const { category } = useParams();
  const [fitness, setFitness] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fitnessCollection = collection(db, "category-fitness");
        const fitnessSnapshot = await getDocs(fitnessCollection);
        const fitnessList = fitnessSnapshot.docs
          .map(doc => doc.data())
          .filter(fitness => fitness.category === "fitness");

        setFitness(fitnessList);
      } catch (error) {
        console.error("Eroare la citirea datelor din Firestore:", error);
      }
    };

    fetchCategories();
  }, [category]);

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          {fitness.map((fitness) => (
            <div key={fitness.slug} className="all-card">
              <NavLink to={`/fitness/${fitness.slug}`} className="all-title">
                <img
                  src={fitness.image}
                  alt={fitness.title}
                  className="all-image"
                />
              </NavLink>
              <div className="all-info">
                <h2>
                  <NavLink to={`/fitness/${fitness.slug}`} className="all-title">
                    {fitness.title}
                  </NavLink>
                </h2>
                <div className="all-subtitle">
                  <p>{fitness.description}</p>
                </div>
              </div>
              <NavLink to={`/fitness/${fitness.slug}`}>
                <button className="read-more-button">CITEȘTE...</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fitness;
