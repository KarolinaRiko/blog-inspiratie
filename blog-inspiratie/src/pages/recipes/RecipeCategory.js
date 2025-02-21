import React from "react";
import { useParams, NavLink } from "react-router-dom";

const recipesData = {
  "feluri-principale": [
    { id: 1, title: "Pizza Margherita", description: "O pizza clasică cu sos de roșii și mozzarella." },
    { id: 2, title: "Lasagna", description: "O lasagna delicioasă cu carne și sos bechamel." },
  ],
  "deserturi": [
    { id: 3, title: "Tiramisu", description: "Desert italian cu mascarpone și cafea." },
    { id: 4, title: "Cheesecake", description: "Cheesecake cremos cu sos de fructe de pădure." },
  ],
  "salate": [
    { id: 5, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete." },
    { id: 6, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar." },
  ],
  "garnituri": [
    { id: 7, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete." },
    { id: 8, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete." },
 ],
  "supe": [
    { id: 9, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete." },
    { id: 10, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete." },
    ]
};

const RecipeCategory = () => {
  const { category } = useParams(); // Preluăm categoria din URL
  const recipes = recipesData[category] || []; // Luăm rețetele din acea categorie

  return (
    <div>
      <h1>{category.replace("-", " ").toUpperCase()}</h1>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <NavLink to={`/recipes/${category}/${recipe.id}`}>{recipe.title}</NavLink> - {recipe.description}
            </li>
          ))
        ) : (
          <p>Nu există rețete în această categorie.</p>
        )}
      </ul>
      <NavLink to="/recipes">Înapoi la toate categoriile</NavLink>
    </div>
  );
};

export default RecipeCategory;
