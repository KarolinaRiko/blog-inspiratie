import React from "react";
import { useParams, NavLink } from "react-router-dom";
import fitnessData from "./fitnessData";

const FitnessCategory = () => {
  const { category } = useParams();
  const filteredExercises = fitnessData[category] || [];

  const categoryNames = {
    "exercitii-upper": "Exercitii Upper",
    "exercitii-lower": "Exercitii Lower",
    "apdomen": "Apdomen",
    "secrete-gym": "Secrete Gym",
  };

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{categoryNames[category] || "Categorie necunoscută"}</h1>
          <hr className="dashed-line" />
        </div>

        <div className="all-container">
          {filteredExercises.length > 0 ? (
            filteredExercises.map((fitness) => (
              <div key={fitness.slug} className="all-card">
                <NavLink to={`/fitness/${fitness.slug}`}>
                  <img src={fitness.image} alt={fitness.title} className="all-image" />
                </NavLink>
                <div className="all-info">
                  <h2>
                    <NavLink to={`/fitness/${fitness.slug}`} className="all-title">
                      {fitness.title}
                    </NavLink>
                  </h2>
                  <p className="all-subtitle">{fitness.description}</p>
                </div>
                <NavLink to={`/fitness/${fitness.slug}`}>
                  <button className="read-more-button">DETALII</button>
                </NavLink>
              </div>
            ))
          ) : (
            <p>Nu există exerciții disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FitnessCategory;