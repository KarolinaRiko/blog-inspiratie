import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const categoryNames = {
  "supe": "Supe",
  "deserturi": "Deserturi",
  "bauturi": "Băuturi",
  "feluri-principale": "Feluri principale",
  "salate": "Salate",
};

function RecipeCategory() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => { 
    const fetchRecipes = async () => {
      const recipesCollection = collection(db, "recipes");
      const recipesSnapshot = await getDocs(recipesCollection);
      const recipesList = recipesSnapshot.docs
        .map(doc => doc.data())
        .filter(recipe => recipe.category === category);

      setRecipes(recipesList);
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>{categoryNames[category] || "Categorie necunoscută"}</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          {recipes.map((recipe) => (
            <div key={recipe.slug} className="all-card">
              <NavLink to={`/recipes/${category}/${recipe.slug}`}>
                <img src={recipe.image} alt={recipe.title} className="all-image" />
              </NavLink>
              <div className="all-info">
                <h2>
                  <NavLink to={`/recipes/${category}/${recipe.slug}`} className="all-title">
                    {recipe.title}
                  </NavLink>
                </h2>
                <p className="all-subtitle">{recipe.description}</p>
              </div>
              <NavLink to={`/recipes/${category}/${recipe.slug}`}>
                <button className="read-more-button">CITEȘTE...</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCategory;
