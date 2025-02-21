import React from "react";
import { useParams } from "react-router-dom";

// Aceleași date pentru rețete ca și în `RecipeCategory.js`
const recipesData = {
  "feluri-principale": [
    { id: 1, title: "Pizza Margherita", description: "O pizza clasică cu sos de roșii și mozzarella.", instructions: "Se face aluatul, se pune sosul, se adaugă mozzarella și se coace la 220°C." },
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
  "garnituri": [
    { id: 7, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete.", instructions: "Se amestecă roșii, castraveți, măsline și brânză feta, se adaugă ulei de măsline și oregano." },
    { id: 8, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar.", instructions: "Se adaugă pui prăjit, crutoane, parmezan și dressing Caesar." },
  ],
  "supe": [
    { id: 9, title: "Salată Grecească", description: "Salată cu brânză feta și legume proaspete.", instructions: "Se amestecă roșii, castraveți, măsline și brânză feta, se adaugă ulei de măsline și oregano." },
    { id: 10, title: "Salată Caesar", description: "Salată cu pui, crutoane și dressing Caesar.", instructions: "Se adaugă pui prăjit, crutoane, parmezan și dressing Caesar." },
  ]
};

const RecipeDetail = () => {
  const { category, id } = useParams(); // Preluăm categoria și id-ul din URL
  const recipe = recipesData[category]?.find((r) => r.id === parseInt(id)); // Găsim rețeta după id

  if (!recipe) {
    return <p>Rețeta nu a fost găsită.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Instrucțiuni:</h2>
      <p>{recipe.instructions}</p>
      <button onClick={() => window.history.back()}>Înapoi</button>
    </div>
  );
};

export default RecipeDetail;
