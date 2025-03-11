import React from "react";
import { useParams, NavLink } from "react-router-dom";
import recipesData from "./recipesData";

const RecipeCategory = () => {
  const { category } = useParams();
  const filteredRecipes = recipesData[category] || [];

  const categoryNames = {
    "supe": "Supe",
    "deserturi": "Deserturi",
    "bauturi": "Bauturi",
    "feluri-principale": "Feluri principale",
    "salate": "Salate",
  };

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{categoryNames[category] || "Categorie necunoscută"}</h1>
          <hr className="dashed-line" />
        </div>
      
        <div className="all-container">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.slug} className="all-card">
                <NavLink to={`/recipes/${recipe.slug}`}>
                  <img src={recipe.image} alt={recipe.title} className="all-image" />
                </NavLink>
                <div className="all-info">
                  <h2>
                    <NavLink to={`/recipes/${recipe.slug}`} className="all-title">
                      {recipe.title}
                    </NavLink> 
                  </h2>
                  <p className="all-subtitle">{recipe.description}</p>
                </div>
                <NavLink to={`/recipes/${recipe.slug}`}>
                    <button className="read-more-button">CITESTE...</button>
                  </NavLink>
              </div>
            ))
          ) : (
            <p>Nu există rețete în această categorie.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCategory;
