import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from 'react-icons/fa';
import Header from "./components/Header.tsx";
import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage'; 

// Importă componentele pentru pagini
import About from './pages/About';
import Blog from './pages/Blog.js';

import Books from "./pages/books/Books";
import BookCategory from "./pages/books/BookCategory";
import BookReview from "./pages/books/BookReview";

import Recipes from "./pages/recipes/Recipes";
import RecipeCategory from "./pages/recipes/RecipeCategory";
import RecipeDetail from "./pages/recipes/RecipeDetail";

import Fitness from './pages/fitness/Fitness.js';
import Mindfulness from './pages/mindfulness/Mindfulness.js';

import ExercitiiLower from './pages/fitness/exercitii-lower.js';
import ExercitiiUpper from './pages/fitness/exercitii-upper.js';
import Apdomen from './pages/fitness/apdomen.js';
import SecreteGym from './pages/fitness/secrete-gym.js';

import Yoga from './pages/mindfulness/yoga.js';
import Meditatie from './pages/mindfulness/meditatie.js';
import Aromoterapie from './pages/mindfulness/aromoterapie.js';


function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [dropdown, setDropdown] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  // state pentru valoarea introdusă în câmpul de căutare


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  
    return () => clearTimeout(timer); // Curăță timer-ul la componenta demontată
  }, []);
  

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };
  const handleMouseEnterUser = () => {
    setUserDropdown(true);
   }; // Deschide dropdown-ul pentru FaUser
  const handleMouseLeaveUser = () => {
    setUserDropdown(false);
   }; // Închide dropdown-ul pentru FaUser


  return (
    <Router>
      <div>
        {showBanner && (
          <header className="banner">
            
          </header>
        )}

          <>
            <Header />
            <div className="top-header">
              <div className="left">
              <h1>
              <NavLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>Inspiratie</NavLink>
             </h1>
                <p>fitness. books. food. travel</p>
              </div>
              <div className="right">
              <FaSearch className="icon" />
        
        {/* Câmpul de căutare va fi mereu vizibil */}
        <input
          type="text"
          placeholder="Caută..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // actualizează valoarea la tastare
        />
        
        <div>
        

        <div 
               onMouseEnter={handleMouseEnterUser} 
               onMouseLeave={handleMouseLeaveUser}
                style={{ cursor: 'pointer' }}
              >
                <FaUser className="icon" />
              </div>
              {userDropdown && (
                <div
                className="dropdown"
                onMouseEnter={() => setUserDropdown(true)} // Menține dropdown-ul deschis
                onMouseLeave={() => setUserDropdown(false)} // Ascunde dropdown-ul când părăsești
              >
                <NavLink to="/login">Autentificare</NavLink>
                <NavLink to="/register">Inregistrare</NavLink>
              </div>
              )}
           </div>
              </div>
            </div>

            <header className="main-header">
              <nav>
                <ul>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/">Blog</NavLink></li>
                  <li onMouseEnter={() => handleMouseEnter("books")}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}>
                      <NavLink to="/books">Books</NavLink>
                  {dropdown === "books" && (
                      <ul 
                      className="dropdown-menu"
                      onMouseEnter={() => setDropdown("books")} // Menține dropdown-ul deschis când mouse-ul e pe el
                      onMouseLeave={handleMouseLeave} // Ascunde dropdown-ul când mouse-ul părăsește
                      >
                           <li><NavLink to="/books/dezvoltare-personala" className="sub-menu-item">Dezvoltare Personala</NavLink></li>
                           <li><NavLink to="/books/romantism" className="sub-menu-item">Romantism</NavLink></li>
                           <li><NavLink to="/books/spiritualitate" className="sub-menu-item">Spiritualitate</NavLink></li>
                           <li><NavLink to="/books/psihologie" className="sub-menu-item">Psihologie</NavLink></li>
                      </ul>
                    )}</li>
                  <li  onMouseEnter={() => handleMouseEnter("recipes")}
                    onMouseLeave={handleMouseLeave}>
                      <NavLink to="/recipes">Recipes</NavLink>
                  {dropdown === "recipes" && (
                      <ul 
                      className="dropdown-menu"
                      onMouseEnter={() => setDropdown("recipes")} // Menține dropdown-ul deschis când mouse-ul e pe el
                      onMouseLeave={handleMouseLeave} // Ascunde dropdown-ul când mouse-ul părăsește
                      >
                        <li><NavLink to="/recipes/feluri-pricipale" className="sub-menu-item">Feluri Principale</NavLink></li>
                        <li><NavLink to="/recipes/garnituri" className="sub-menu-item">Garnituri</NavLink></li>
                        <li><NavLink to="/recipes/supe" className="sub-menu-item">Supe</NavLink></li>
                        <li><NavLink to="/recipes/salate" className="sub-menu-item">Salate</NavLink></li>
                        <li><NavLink to="/recipes/deserte" className="sub-menu-item">Deserte</NavLink></li>
                      </ul>
                    )}</li>
                  <li   onMouseEnter={() => handleMouseEnter("fitness")}
                    onMouseLeave={handleMouseLeave}>
                      <NavLink to="/fitness">Fitness</NavLink>
                  {dropdown === "fitness" && (
                      <ul 
                      className="dropdown-menu"
                      onMouseEnter={() => setDropdown("fitness")} // Menține dropdown-ul deschis când mouse-ul e pe el
                      onMouseLeave={handleMouseLeave} // Ascunde dropdown-ul când mouse-ul părăsește
                      >
                        <li><NavLink to="/pages/fitness/exercitii-upper" className="sub-menu-item">Exercitii Upper</NavLink></li>
                        <li><NavLink to="/pages/fitness/exercitii-lower" className="sub-menu-item">Exercitii Lower</NavLink></li>
                        <li><NavLink to="/pages/fitness/apdomen" className="sub-menu-item">Apdomen</NavLink></li>
                        <li><NavLink to="/pages/fitness/secrete-gym" className="sub-menu-item">Secrete Gym</NavLink></li>
                      </ul>
                    )}</li>
                  <li    onMouseEnter={() => handleMouseEnter("mindfulness")}
                    onMouseLeave={handleMouseLeave}>
                      <NavLink to="/mindfulness">Mindfulness</NavLink>
                  {dropdown === "mindfulness" && (
                      <ul 
                      className="dropdown-menu"
                      onMouseEnter={() => setDropdown("mindfulness")} // Menține dropdown-ul deschis când mouse-ul e pe el
                      onMouseLeave={handleMouseLeave} // Ascunde dropdown-ul când mouse-ul părăsește
                      >
                        <li><NavLink to="/pages/mindfulness/meditatie" className="sub-menu-item">Meditatie</NavLink></li>
                        <li><NavLink to="/pages/mindfulness/yoga" className="sub-menu-item">Yoga</NavLink></li>
                        <li><NavLink to="/pages/mindfulness/aromoterapie" className="sub-menu-item">Aromoterapie</NavLink></li>
                      </ul>
                    )}</li>
                </ul>
              </nav>
            </header>

            
          </>
        

        {/* Aici  Routes și folosim element={} */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Blog />} />

          <Route path="/books" element={<Books />} />
          <Route path="/books/:category" element={<BookCategory />} />
          <Route path="/books/:category/:bookSlug" element={<BookReview />} />

           <Route path="/recipes" element={<Recipes />} />
           <Route path="/recipes/:category" element={<RecipeCategory />} />
           <Route path="/recipes/:category/:id" element={<RecipeDetail />} />

          <Route path="/pages/fitness" element={<Fitness />} />
          <Route path="/pages/mindfulness" element={<Mindfulness />} />


          <Route path="/pages/fitness/exercitii-upper" element={<ExercitiiUpper />} />
          <Route path="/pages/fitness/exercitii-lower" element={<ExercitiiLower/>} />
          <Route path="/pages/fitness/apdomen" element={<Apdomen/>} />
          <Route path="/pages/fitness/secrete-gym" element={<SecreteGym/>} /> 

          <Route path="/pages/mindfulness/meditatie" element={<Meditatie/>} />
          <Route path="/pages/mindfulness/yoga" element={<Yoga />} />
          <Route path="/pages/mindfulness/aromoterapie" element={<Aromoterapie />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
