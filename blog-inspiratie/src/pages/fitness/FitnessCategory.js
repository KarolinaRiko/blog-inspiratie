import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const categoryNames = {
  "exercitii-upper": "Exerciții Upper",
  "exercitii-lower": "Exerciții Lower",
  "abdomen": "Abdomen",
  "secrete-gym": "Secrete Gym",
};

function FitnessCategory() {
  const { category } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const exercisesRef = collection(db, "fitness");
      const q = query(exercisesRef, where("category", "==", category));
      const querySnapshot = await getDocs(q);
      const exercisesList = querySnapshot.docs.map(doc => doc.data());
      setExercises(exercisesList);
    };

    fetchExercises();
  }, [category]);

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{categoryNames[category] || "Categorie necunoscută"}</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          {exercises.length > 0 ? (
            exercises.map((fitness) => (
              <div key={fitness.slug} className="all-card">
                {category !== "secrete-gym" ? (
                  <NavLink to={`/fitness/${category}/${fitness.slug}`}>
                    <img src={fitness.image} alt={fitness.title} className="all-image" />
                  </NavLink>
                ) : (
                  <img src={fitness.image} alt={fitness.title} className="all-image" />
                )}
                <div className="all-info">
                  <h2>
                    {category !== "secrete-gym" ? (
                      <NavLink to={`/fitness/${category}/${fitness.slug}`} className="all-title">
                        {fitness.title}
                      </NavLink>
                    ) : (
                      <span className="all-title">{fitness.title}</span>
                    )}
                  </h2>
                  <p className="all-subtitle">{fitness.description}</p>
                </div>
                {category !== "secrete-gym" && (
                  <NavLink to={`/fitness/${category}/${fitness.slug}`}>
                    <button className="read-more-button">DETALII</button>
                  </NavLink>
                )}
              </div>
            ))
          ) : (
            <p>Nu există exerciții disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FitnessCategory;
