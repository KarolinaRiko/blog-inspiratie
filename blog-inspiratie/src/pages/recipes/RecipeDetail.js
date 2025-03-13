import React from "react";
import { useParams } from "react-router-dom";

const recipesDetail = {
  "supe": [
    {
      slug: "supa-de-dovleac",
      title: "Supa de dovleac",
      description: "Supa de dovleac este fantastică pentru zilele reci. Este minunată pentru a vă potoli foamea și pentru a vă încălzi. Aceasta vă va cuceri prin gustul său delicios și consistența cremoasă, ce reprezintă un contrast excelent cu semințele crocante pe care le conține.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/644831/Navrh-bez-nazvu-2024-12-09T093136.064-688x439.png",
      category: "supe",
      ingredients: [
        "600g dovleac",
        "600 ml supa concentrata de legume",
        "200 ml lapte de cocos",
        "300 g cartof dulce",
        "10 g de ghimbir",
        "1 ceapă",
        "3 căței de usturoi",
        "2 lingurițe de ulei de măsline",

        "1 morcov mic",
        "sare, piper dupa gust"
      ],
      steps: [
        { text: "Începeți prin a curăța cartoful dulce și a-l tăia cubulețe împreună cu dovleacul. Nu este nevoie să-l curățați pe acesta din urmă. Apoi curățați morcovii și tăiați-i felii. Căliți în ulei ceapa, usturoiul și ghimbirul toate tocate mărunt. Adăugați apoi cartofii dulci, morcovii și dovleacul.", image: "https://gymbeam.ro/blog/wp-content/uploads/2024/12/Navrh-bez-nazvu-2024-12-09T092436.287.png" },
        { text: "Căliți împreună și apoi turnați supa concentrată de legume și laptele de cocos. Condimentați cu sare după gust, acoperiți oala cu un capac și fierbeți până când legumele devin moi. Acest lucru va dura aproximativ 20 de minute." },
        { text: "Când este gata, luați un blender și mixați supa până se omogenizează. Apoi asezonați cu piper măcinat și sare după cum considerați și totul este gata. Serviți cu verdețuri proaspete și semințe de dovleac, pe care le puteți usca în prealabil într-o tigaie. Ornați farfuria cu câteva picături de lapte de cocos pentru efect." }
      ]
    },
  ]
}


const RecipeDetail = () => {
  const { category, recipeSlug } = useParams();

  const recipe = recipesDetail[category]?.find(r => r.slug === recipeSlug);

  if (!recipe) {
    return <h2>Reteta nu a fost gasita!</h2>;
  }

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container">
          <div className="recipe-header">
            <div className="recipe-ingredients">
              <h2>{recipe.title}</h2>
              <hr className="recipes-line" />
              <h>Ingrediente</h>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div> 
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          </div>
          <hr className="recipes-line" />
          <div className="recipe-instructions">
            <h>Mod de preparare:</h>
            {recipe.steps?.map((step, index) => (
              <div key={index} className={`recipe-step ${index % 2 === 0 ? "left" : "right"}`}>
                <p>{step.text}</p>
                {step.image && <img src={step.image} alt={`Pasul ${index + 1}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
