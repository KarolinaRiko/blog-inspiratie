import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from 'react-icons/fa';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './auth';
import LoginPage from './LoginPage';
import RegisterPage from "./RegisterPage";
import AccountPage from "./AccountPage";
import Settings from "./Settings";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

import About from './pages/About';
import Blog from './pages/Blog.js';

import Books from "./pages/books/Books";
import BookCategory from "./pages/books/BookCategory";
import BookReview from "./pages/books/BookReview";

import Recipes from "./pages/recipes/Recipes";
import RecipeCategory from "./pages/recipes/RecipeCategory";
import RecipeDetail from "./pages/recipes/RecipeDetail";

import Fitness from './pages/fitness/Fitness.js';
import FitnessCategory from './pages/fitness/FitnessCategory';
import FitnessDetail from './pages/fitness/FitnessDetail';

import Mindfulness from './pages/mindfulness/Mindfulness.js';
import Yoga from './pages/mindfulness/yoga.js';
import Meditatie from './pages/mindfulness/meditatie.js';
import Aromoterapie from './pages/mindfulness/aromoterapie.js';
import Logout from './Logout';
import SubscriptionForm from './SubscriptionForm';

function App() {
  const [dropdown, setDropdown] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

  let hideDropdownTimeout = null;

  const allArticles = useMemo(() => [
    { title: "Atomic Habits", category: "books/dezvoltare-personala" },
    { title: "Dimineata miraculoasa", category: "books/dezvoltare-personala" },
    { title: "Barbatii sunt de pe Marte femeile sunt de pe Venus", category: "books/psihologie" },
    { title: "Cele cinci limbaje ale iubirii", category: "books/psihologie" },
    { title: "Fluturi. Volumul 1", category: "books/romantism" },
    { title: "Fluturi. Volumul 2", category: "books/romantism" },
    { title: "Fluturi. Volumul 3", category: "books/romantism" },
    { title: "Fluturi. Volumul 4", category: "books/romantism" },
    { title: "Totul se termina cu noi", category: "books/romantism" },
    { title: "Totul incepe cu noi", category: "books/romantism" },
    { title: "Twisted Love", category: "books/romantism" },
    { title: "Twisted Games", category: "books/romantism" },
    { title: "Twisted Hate", category: "books/romantism" },
    { title: "Twisted Lies", category: "books/romantism" },
    { title: "Mindfulness zi de zi", category: "books/spiritualtitate" },
    { title: "Human Design", category: "books/spiritualtitate" },
    { title: "Paste cremoase cu somon", category: "recipes/feluri-principale" },
    { title: "Gulas de vita", category: "recipes/feluri-principale" },
    { title: "Rulouri cu scortisoara si dovleac", category: "recipes/deserturi" },
    { title: "Cheesecake cu tofu si arahide", category: "recipes/deserturi" },
    { title: "Salata cu bulgur si carne de curcan", category: "recipes/salate" },
    { title: "Salata Nicoise", category: "recipes/salate" },
    { title: "Pumpkin Spice Latte", category: "recipes/bauturi" },
    { title: "Smoothie cremos cu banane si unt de arahide", category: "recipes/bauturi" },
    { title: "Supa de dovleac", category: "recipes/supe" },
    { title: "Supa de pui dulce-acrisoara", category: "recipes/supe" },
    { title: "Yoga", category: "mindfulness" },
    { title: "Meditatie", category: "mindfulness" },
    { title: "Aromoterapie", category: "mindfulness" },
    { title: "Mountain Climbers", category: "fitness/apdomen" },
    { title: "Flutter Kicks", category: "fitness/apdomen" },
    { title: "Leg Raises", category: "fitness/apdomen" },
    { title: "Russian Twists", category: "fitness/apdomen" },
    { title: "Bicycle Crunches", category: "fitness/apdomen" },
    { title: "Crunches", category: "fitness/apdomen" },
    { title: "Plank", category: "fitness/apdomen" },
    { title: "Calf Raises", category: "fitness/exercitii-lower" },
    { title: "Step-ups", category: "fitness/exercitii-lower" },
    { title: "Leg Curls", category: "fitness/exercitii-lower" },
    { title: "Deadlifts", category: "fitness/exercitii-lower" },
    { title: "Lunges", category: "fitness/exercitii-lower" },
    { title: "Glute Bridges", category: "fitness/exercitii-lower" },
    { title: "Squats", category: "fitness/exercitii-lower" },
    { title: "Bicep Curls", category: "fitness/exercitii-upper" },
    { title: "Chest Press", category: "fitness/exercitii-upper" },
    { title: "Lateral Raises", category: "fitness/exercitii-upper" },
    { title: "Triceps Dips", category: "fitness/exercitii-upper" },
    { title: "Bent-over Rows", category: "fitness/exercitii-upper" },
    { title: "Push-ups", category: "fitness/exercitii-upper" },
    { title: "Dumbbell Shoulder Press", category: "fitness/exercitii-upper" }
  ], []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
      setShowResults(true);
    } else {
      setFilteredArticles([]);
      setShowResults(false);
    }
  }, [searchQuery, allArticles]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error at logout:", error);
    });
  };


  const handleMouseEnter = (menu) => {
    clearTimeout(hideDropdownTimeout);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setDropdown(null);
    }, 1000);
  };
  const handleMouseEnterUser = () => {
    clearTimeout(hideDropdownTimeout);
    setUserDropdown(true);
  };
  const handleMouseLeaveUser = () => {
    hideDropdownTimeout = setTimeout(() => {
      setUserDropdown(false);
    }, 1000);
  };



  return (
    <Router>
      <div className="top-header">
        <div className="left">
          <h1>
            <NavLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              Inspiratie
            </NavLink>
          </h1>
          <p>fitness. books. food. mindfulness</p>
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
              {filteredArticles.slice(0, 6).length > 0 ? (
                filteredArticles.slice(0, 6).map((article, index) => (
                  <li key={index} className="result-item">
                    <NavLink to={`/${article.category}/${article.title.replace(/\s+/g, "-").toLowerCase()}`} className="result-link">
                      {article.title}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li className="no-results">Nicio potrivire gasita</li>
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
                onMouseEnter={handleMouseEnterUser}
                onMouseLeave={handleMouseLeaveUser}
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
            <li
              onMouseEnter={() => handleMouseEnter("books")}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}>
              <NavLink to="/books">Books</NavLink>
              {dropdown === "books" && (
                <ul className="dropdown-menu"
                onMouseEnter={() => setDropdown("books")}
                onMouseLeave={handleMouseLeave}>
                  <li><NavLink to="/books/dezvoltare-personala" className="sub-menu-item">Dezvoltare Personala</NavLink></li>
                  <li><NavLink to="/books/romantism" className="sub-menu-item">Romantism</NavLink></li>
                  <li><NavLink to="/books/spiritualitate" className="sub-menu-item">Spiritualitate</NavLink></li>
                  <li><NavLink to="/books/psihologie" className="sub-menu-item">Psihologie</NavLink></li>
                </ul>
              )}
            </li>
            {/* Dropdown pentru Recipes */}
            <li 
              onMouseEnter={() => handleMouseEnter("recipes")}
              onMouseLeave={handleMouseLeave}>
              <NavLink to="/recipes">Recipes</NavLink>
              {dropdown === "recipes" && (
                <ul className="dropdown-menu"
                onMouseEnter={() => setDropdown("recipes")}
                onMouseLeave={handleMouseLeave}>
                  <li><NavLink to="/recipes/feluri-principale" className="sub-menu-item">Feluri Principale</NavLink></li>
                  <li><NavLink to="/recipes/supe" className="sub-menu-item">Supe</NavLink></li>
                  <li><NavLink to="/recipes/salate" className="sub-menu-item">Salate</NavLink></li>
                  <li><NavLink to="/recipes/deserturi" className="sub-menu-item">Deserturi</NavLink></li>
                  <li><NavLink to="/recipes/bauturi" className="sub-menu-item">Bauturi</NavLink></li>
                </ul>
              )}
            </li>
            {/* Dropdown pentru Fitness */}
            <li 
              onMouseEnter={() => handleMouseEnter("fitness")}
              onMouseLeave={handleMouseLeave}>
              <NavLink to="/fitness">Fitness</NavLink>
              {dropdown === "fitness" && (
                <ul className="dropdown-menu"
                onMouseEnter={() => setDropdown("fitness")}
                onMouseLeave={handleMouseLeave}>
                  <li><NavLink to="/fitness/exercitii-upper" className="sub-menu-item">Exercitii Upper</NavLink></li>
                  <li><NavLink to="/fitness/exercitii-lower" className="sub-menu-item">Exercitii Lower</NavLink></li>
                  <li><NavLink to="/fitness/apdomen" className="sub-menu-item">Apdomen</NavLink></li>
                  <li><NavLink to="/fitness/secrete-gym" className="sub-menu-item">Secrete Gym</NavLink></li>
                </ul>
              )}
            </li>
            {/* Dropdown pentru Mindfulness */}
            <li 
              onMouseEnter={() => handleMouseEnter("mindfulness")}
              onMouseLeave={handleMouseLeave}>
              <NavLink to="/mindfulness">Mindfulness</NavLink>
              {dropdown === "mindfulness" && (
                <ul className="dropdown-menu"
                onMouseEnter={() => setDropdown("mindfulness")}
                onMouseLeave={handleMouseLeave}>
                  <li><NavLink to="/mindfulness/meditatie" className="sub-menu-item">Meditatie</NavLink></li>
                  <li><NavLink to="/mindfulness/yoga" className="sub-menu-item">Yoga</NavLink></li>
                  <li><NavLink to="/mindfulness/aromoterapie" className="sub-menu-item">Aromoterapie</NavLink></li>
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<SubscriptionForm />} />
        <Route path="/" element={<Blog />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:category" element={<BookCategory />} />
        <Route path="/books/:category/:bookSlug" element={<BookReview />} />
        <Route path="/books/:category/:title" element={<Books />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:category" element={<RecipeCategory />} />
        <Route path="/recipes/:category/:recipeSlug" element={<RecipeDetail />} />
        <Route path="/recipes/:category/:title" element={<Recipes />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/fitness/:category" element={<FitnessCategory />} />
        <Route path="/fitness/:category/:fitnessSlug" element={<FitnessDetail />} />
        <Route path="/fitness/:category/:title" element={<Fitness />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/mindfulness/meditatie" element={<Meditatie />} />
        <Route path="/mindfulness/yoga" element={<Yoga />} />
        <Route path="/mindfulness/aromoterapie" element={<Aromoterapie />} />
        <Route path="/mindfulness/:category/:title" element={<Mindfulness />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
