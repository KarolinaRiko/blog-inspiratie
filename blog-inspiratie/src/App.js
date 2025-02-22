import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from 'react-icons/fa';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './auth';
import LoginPage from './LoginPage';
import RegisterPage from "./RegisterPage";
import AccountPage from "./AccountPage";

import SearchResults from './components/SearchResults';

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
import Logout from './Logout';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [dropdown, setDropdown] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [showResults, setShowResults] = useState(false); 
  const searchContainerRef = useRef(null);
  

  // Simularea unor articole
  const booksArticles = [
    { title: "Cartea Vieții", content: "Aceasta este o carte minunată despre viață." },
    { title: "Secretele minții", content: "Descoperă cum să îți antrenezi mintea." },
  ];
  const recipesArticles = [
    { title: "Rețeta de Pancakes", content: "O rețetă delicioasă pentru dimineți perfecte." },
  ];
  const fitnessArticles = [
    { title: "Exerciții pentru acasă", content: "Cum să te antrenezi eficient fără echipament." },
  ];
  const mindfulnessArticles = [
    { title: "Meditația zilnică", content: "Beneficiile meditației pentru o minte liniștită." },
  ];

  useEffect(() => {
    if (searchQuery) {
      const allArticles = [...booksArticles, ...recipesArticles, ...fitnessArticles, ...mindfulnessArticles];
      const filtered = allArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
      setShowResults(true);  // Afișăm rezultatele când există căutare
    } else {
      setFilteredArticles([]);
      setShowResults(false);  // Nu afișăm rezultatele când nu există căutare
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowResults(false);  // Ascundem rezultatele când dăm click în afară
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  
    return () => clearTimeout(timer); // Curăță timer-ul la componenta demontată
  }, []);
   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null); // Resetăm user-ul când se deconectează
    }).catch((error) => {
      console.error("Error at logout:", error);
    });
  };


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
            {/* Banner-ul */}
          </header>
        )}

        <div className="top-header">
          <div className="left">
            <h1>
              <NavLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                Inspiratie
              </NavLink>
            </h1>
            <p>fitness. books. food. travel</p>
          </div>
          <div className="right" ref={searchContainerRef}>
             <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Caută..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
         {showResults && searchQuery && (
        <ul className="results-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <li key={index} className="result-item">
                {article.title}
              </li>
            ))
          ) : (
            <li className="no-results">Nicio potrivire găsită</li>
          )}
        </ul>
      )}
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
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            {!user ? (
              <>
                <NavLink to="/login">Autentificare</NavLink>
                <NavLink to="/register">Inregistrare</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/home">Contul tau</NavLink>
                <Logout className="log-out-dropdown" />
              </>
            )}
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

              {/* Dropdown pentru Books */}
              <li onMouseEnter={() => handleMouseEnter("books")}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}>
                  <NavLink to="/books">Books</NavLink>
                  {dropdown === "books" && (
                    <ul className="dropdown-menu">
                      <li><NavLink to="/books/dezvoltare-personala" className="sub-menu-item">Dezvoltare Personala</NavLink></li>
                      <li><NavLink to="/books/romantism" className="sub-menu-item">Romantism</NavLink></li>
                      <li><NavLink to="/books/spiritualitate" className="sub-menu-item">Spiritualitate</NavLink></li>
                      <li><NavLink to="/books/psihologie" className="sub-menu-item">Psihologie</NavLink></li>
                    </ul>
                  )}
              </li>
              {/* Dropdown pentru Recipes */}
              <li onMouseEnter={() => handleMouseEnter("recipes")}
                onMouseLeave={handleMouseLeave}>
                  <NavLink to="/recipes">Recipes</NavLink>
                  {dropdown === "recipes" && (
                    <ul className="dropdown-menu">
                      <li><NavLink to="/recipes/feluri-principale" className="sub-menu-item">Feluri Principale</NavLink></li>
                      <li><NavLink to="/recipes/garnituri" className="sub-menu-item">Garnituri</NavLink></li>
                      <li><NavLink to="/recipes/supe" className="sub-menu-item">Supe</NavLink></li>
                      <li><NavLink to="/recipes/salate" className="sub-menu-item">Salate</NavLink></li>
                      <li><NavLink to="/recipes/deserte" className="sub-menu-item">Deserte</NavLink></li>
                    </ul>
                  )}
              </li>
              {/* Dropdown pentru Fitness */}
              <li onMouseEnter={() => handleMouseEnter("fitness")}
                onMouseLeave={handleMouseLeave}>
                  <NavLink to="/fitness">Fitness</NavLink>
                  {dropdown === "fitness" && (
                    <ul className="dropdown-menu">
                      <li><NavLink to="/pages/fitness/exercitii-upper" className="sub-menu-item">Exercitii Upper</NavLink></li>
                      <li><NavLink to="/pages/fitness/exercitii-lower" className="sub-menu-item">Exercitii Lower</NavLink></li>
                      <li><NavLink to="/pages/fitness/apdomen" className="sub-menu-item">Apdomen</NavLink></li>
                      <li><NavLink to="/pages/fitness/secrete-gym" className="sub-menu-item">Secrete Gym</NavLink></li>
                    </ul>
                  )}
              </li>
              {/* Dropdown pentru Mindfulness */}
              <li onMouseEnter={() => handleMouseEnter("mindfulness")}
                onMouseLeave={handleMouseLeave}>
                  <NavLink to="/mindfulness">Mindfulness</NavLink>
                  {dropdown === "mindfulness" && (
                    <ul className="dropdown-menu">
                      <li><NavLink to="/pages/mindfulness/meditatie" className="sub-menu-item">Meditatie</NavLink></li>
                      <li><NavLink to="/pages/mindfulness/yoga" className="sub-menu-item">Yoga</NavLink></li>
                      <li><NavLink to="/pages/mindfulness/aromoterapie" className="sub-menu-item">Aromoterapie</NavLink></li>
                    </ul>
                  )}
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={user ? <AccountPage user={user} onLogout={handleLogout} /> : <NavLink to="/login" />} />
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
          <Route path="/pages/fitness/exercitii-lower" element={<ExercitiiLower />} />
          <Route path="/pages/fitness/apdomen" element={<Apdomen />} />
          <Route path="/pages/fitness/secrete-gym" element={<SecreteGym />} />
          <Route path="/pages/mindfulness/meditatie" element={<Meditatie />} />
          <Route path="/pages/mindfulness/yoga" element={<Yoga />} />
          <Route path="/pages/mindfulness/aromoterapie" element={<Aromoterapie />} />
          <Route path="/search" element={<SearchResults filteredArticles={filteredArticles} searchQuery={searchQuery} />} />
        </Routes>
      </div>
      
      </Router>
  );
}

export default App;
