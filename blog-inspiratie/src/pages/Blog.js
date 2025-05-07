import React from 'react';
import { NavLink } from "react-router-dom";

const subcategoryImages = {
  "Romantism": "/images/3.jpg",
  "Dezvoltare personala": "/images/16.jpg",
  "Spiritualitate": "/images/4.jpg",
  "Feluri principale": "/images/6.jpg",
  "Supe": "/images/7.jpg",
  "Salate": "/images/5.jpg",
  "Exercitii Upper": "/images/12.jpg",
  "Exercitii Lower": "/images/13.jpg",
  "Apdomen": "/images/11.jpg",
  "Meditatie": "/images/9.jpg",
  "Yoga": "/images/8.jpg",
  "Aromaterapie": "/images/10.jpg",
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
