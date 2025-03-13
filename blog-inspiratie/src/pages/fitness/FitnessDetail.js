import React from "react";
import { useParams } from "react-router-dom";

const fitnessDetail = {
  "exercitii-upper": [
    {
      slug: "push-ups",
      title: "Push-ups",
      image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/06/Muscles-worked-in-push-ups.jpg?resize=563%2C563&ssl=1",
      gif: "https://media0.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=6c09b952noibuyuorzmmpehl3crwiztsuoaktk5mbhci053t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g", 
      category: "exercitii-upper",
      mistakes: [
        "Nu vă lăsați șoldurile să se încline.",
        "Verificați-vă poziția mâinii.",
        "Nu vă lăsați coatele să se stingă.",
        "Efectuați flotările mai încet și controlat."
      ],
      benefits: [
        "Îmbunătățește forța pieptului, umerilor și tricepsului.",
        "Le poti face mai usoare sau mai dificile.",
        "Se poate face de oriunde",
        "Este un stimulator de sanatate."
      ],
      muscles: ["Piept", "Deltoizi", "Triceps"]
    },
  ]
};

const FitnessDetail = () => {
  const { category, fitnessSlug } = useParams();
  const fitness = fitnessDetail[category]?.find((exercise) => exercise.slug === fitnessSlug);

  if (!fitness) {
    return <h2>Exercitiul nu a fost gasit!</h2>;
  }

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container">
          <div className="exercise-detail">
            <h2>{fitness.title}</h2>
            <div className="exercise-content">
                {fitness.gif && <img src={fitness.gif} alt={fitness.title} className="exercise-gif" />}
              <div className="muscles">
                <h3>Muschii lucrati</h3>
                <ul>
                  {fitness.muscles.map((muscle, index) => (
                    <li key={index}>{muscle}</li>
                  ))}
                </ul>
              </div>
              <div className="mistakes">
                <h3>Greseli de evitat</h3>
                <ul>
                  {fitness.mistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
              <div className="benefits">
                <h3>Beneficii</h3>
                <ul>
                  {fitness.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessDetail;
