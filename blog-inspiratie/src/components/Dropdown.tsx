import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";


interface DropdownProps {
  title: string;
  subcategories: { name: string; path: string }[];
}

function Dropdown({ title, subcategories }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 text-white">{title}</button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            {subcategories.map((sub, index) => (
              <li key={index} className="dropdown-item">
                <Link to={sub.path}>{sub.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
