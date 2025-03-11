import React from "react";
import { useParams } from "react-router-dom";

const recipesData = {
  "feluri-principale": [
    {
      id: 1,
      title: "Paste cremoase cu somon",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/638070/Navrh-bez-nazvu-2024-10-24T135929.651-688x439.png",
      detailedDescription: "Pizza Margherita este o pizza italiană clasică, preparată cu sos de roșii proaspăt, mozzarella și busuioc. Este un preparat simplu și delicios, perfect pentru orice ocazie."
    },
    { id: 2, title: "Lasagna", description: "O lasagna delicioasă cu carne și sos bechamel.", instructions: "Se pune carne tocată, se adaugă sos bechamel, straturi de lasagna și se coace." },
  ],
  "deserte": [
    { id: 3, title: "Tiramisu", description: "Desert italian cu mascarpone și cafea.", instructions: "Se amestecă mascarpone cu ouă și zahăr, se înmoaie pișcoturile în cafea și se asamblează." },
    { id: 4, title: "Cheesecake", description: "Cheesecake cremos cu sos de fructe de pădure.", instructions: "Se face baza din biscuiți, se adaugă crema de brânză și se coace." },
  ],
  "salate": [
    { id: 5, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete.", instructions: "Se amestecă roșii, castraveți, măsline și brânză feta, se adaugă ulei de măsline și oregano." },
    { id: 6, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar.", instructions: "Se adaugă pui prăjit, crutoane, parmezan și dressing Caesar." },
  ],
  "bauturi": [
    { id: 7, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete.", instructions: "Se amestecă roșii, castraveți, măsline și brânză feta, se adaugă ulei de măsline și oregano." },
    { id: 8, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar.", instructions: "Se adaugă pui prăjit, crutoane, parmezan și dressing Caesar." },
  ],
  "supe": [
    { id: 9, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete.", instructions: "Se amestecă roșii, castraveți, măsline și brânză feta, se adaugă ulei de măsline și oregano." },
    { id: 10, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar.", instructions: "Se adaugă pui prăjit, crutoane, parmezan și dressing Caesar." },
  ]
};

const RecipeDetail = () => {
  const { category, id } = useParams();
  const recipe = recipesData[category]?.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Rețeta nu a fost găsită.</p>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <p>{recipe.detailedDescription}</p>
      <h2>Instrucțiuni:</h2>
      <p>{recipe.instructions}</p>
      <button onClick={() => window.history.back()} className="back-button">Înapoi</button>
    </div>
  );
};


export default RecipeDetail;
