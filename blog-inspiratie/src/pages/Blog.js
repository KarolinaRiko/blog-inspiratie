import React from 'react';
import { NavLink } from "react-router-dom";

const subcategoryImages = {
  "Romantism": "https://img3.stockfresh.com/files/s/srnr/m/82/1747556_stock-photo-red-rose-at-the-old-open-book.jpg",
  "Dezvoltare personala": "https://youth.md/wp-content/uploads/2021/04/zodiac-february-growth-wip1.jpg",
  "Spiritualitate": "https://fpm.ro/wp-content/uploads/5-carti-de-spiritualitate-si-dezvoltare-personala-pe-care-trebuie-sa-le-citesti-in-2017.jpg",
  "Feluri principale": "https://botosani24.ro/wp-content/uploads/2021/12/masa-de-craciun-e1671702302156.jpg",
  "Supe": "https://www.beko.ro/blog/wp-content/uploads/2019/08/Supa-crema-de-dovleac-1494051806.jpg",
  "Salate": "https://sfatulparintilor.ro/reteteletale/wp-content/uploads/2012/05/Salata-cu-de-toate-sfatulparintilor.ro-Depositphotos_76397865_L-1400x850.jpg",
  "Exercitii Upper": "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all",
  "Exercitii Lower": "https://cdn.mos.cms.futurecdn.net/Jqcjo7KKVwPNWDqbSWxsoF-1000-80.jpg",
  "Apdomen": "https://i0.1616.ro/media/2/2701/33670/16903708/1/aparate-fitness-abdomen-1.jpg?width=860",
  "Meditatie": "https://www.catena.ro/assets/uploads/files/images/meditatie.jpg",
  "Yoga": "https://www.auromere.com/images/Yoga-Pastel-Sun-FB.jpg",
  "Aromaterapie": "https://assets.protv.md/articles/files/thumbs/900x/2021/12/07/celemaibuneuleiuriesentialearomaterapie6822124481-1638885887volwolx.jpeg",
};

const categories = [
  { name: "Books", path: "/books", subcategories: ["Dezvoltare personala", "Romantism", "Spiritualitate"] },
  { name: "Recipes", path: "/recipes", subcategories: ["Feluri principale", "Supe", "Salate"] },
  { name: "Fitness", path: "/fitness", subcategories: ["Exercitii Upper", "Exercitii Lower", "Apdomen"] },
  { name: "Mindfulness", path: "/mindfulness", subcategories: ["Meditatie", "Yoga", "Aromaterapie"] },
];

export default function Blog() {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Blog</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          <div className="blog-container">
            {categories.map((category) => (
              <div key={category.name} className="blog-category">
               <div className="blog-header">
               <h2>{category.name}</h2>
               </div>
                <div className="blog-subcategories">
                  {category.subcategories.map((sub, index) => (
                     <NavLink
                     key={index}
                     to={`${category.path}/${sub.toLowerCase().replace(/ /g, "-")}`}
                     style={{ backgroundImage: `url(${subcategoryImages[sub]})` }}
                     className="subcategory-link"
                   >
                     <span>{sub}</span>
                   </NavLink>
                  ))}
                </div>
                <div className="see-all-container">
                    <NavLink to={category.path}>See All</NavLink>
                      </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
