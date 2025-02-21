import React from "react";
import { NavLink } from "react-router-dom";

const Recipes = () => {
  return (
    <div>
      <h1>Toate Categoriile de Rețete</h1>
      <ul>
        <li>
          <NavLink to="/recipes/feluri-principale">Feluri principale</NavLink>
        </li>
        <li>
          <NavLink to="/recipes/deserte">Deserte</NavLink>
        </li>
        <li>
          <NavLink to="/recipes/salate">Salate</NavLink>
        </li>
        <li>
          <NavLink to="/recipes/supe">Supe</NavLink>
        </li>
        <li>
          <NavLink to="/recipes/garnituri">Garnituri</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Recipes;
