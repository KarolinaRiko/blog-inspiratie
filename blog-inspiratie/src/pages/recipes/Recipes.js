import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Recipes = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const recipesCollection = collection(db, "category-recipes");
        const recipesSnapshot = await getDocs(recipesCollection);
        const recipesList = recipesSnapshot.docs
          .map(doc => doc.data())
          .filter(recipes => recipes.category === "recipes");

        setRecipes(recipesList);
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
          {recipes.map((recipes) => (
            <div key={recipes.slug} className="all-card">
              <NavLink to={`/recipes/${recipes.slug}`} className="all-title">
                <img
                  src={recipes.image}
                  alt={recipes.title}
                  className="all-image"
                />
              </NavLink>
              <div className="all-info">
                <h2>
                  <NavLink to={`/recipes/${recipes.slug}`} className="all-title">
                    {recipes.title}
                  </NavLink>
                </h2>
                <div className="all-subtitle">
                  <p>{recipes.description}</p>
                </div>
              </div>
              <NavLink to={`/recipes/${recipes.slug}`}>
                <button className="read-more-button">CITEȘTE...</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
