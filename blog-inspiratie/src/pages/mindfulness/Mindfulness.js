import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Mindfulness = () => {
  const { category } = useParams();
  const [mindfulness, setMindfulness] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
       const mindfulnessCollection = collection(db, "mindfulness");
            const mindfulnessSnapshot = await getDocs(mindfulnessCollection);
            const mindfulnessList = mindfulnessSnapshot.docs
          .map(doc => doc.data())
          .filter(mindfulness => mindfulness.category === "mindfulness"); 

        setMindfulness(mindfulnessList);
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
          {mindfulness.map((mindfulness) => (
            <div key={mindfulness.slug} className="all-card">
              <NavLink to={`/mindfulness/${mindfulness.slug}`} className="all-title">
                <img
                  src={mindfulness.image}
                  alt={mindfulness.title}
                  className="all-image"
                />
              </NavLink>
              <div className="all-info">
                <h2>
                  <NavLink to={`/mindfulness/${mindfulness.slug}`} className="all-title">
                    {mindfulness.title}
                  </NavLink>
                </h2>
                <div className="all-subtitle">
                  <p>{mindfulness.description}</p>
                </div>
              </div>
              <NavLink to={`/mindfulness/${mindfulness.slug}`}>
                <button className="read-more-button">CITEȘTE...</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mindfulness;
