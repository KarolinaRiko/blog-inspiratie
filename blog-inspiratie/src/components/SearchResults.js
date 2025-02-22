import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchResults = ({ filteredArticles, searchQuery }) => {
  return (
    <div className="search-results">
      <h2>Rezultatele căutării:</h2>
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <div key={index} className="article">
            <h3>{article.title}</h3>
            <p>{article.content.substring(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p className="no-results"><FaSearch className="no-results-icon" /> Nu au fost găsite rezultate pentru "{searchQuery}"</p>
      )}
    </div>
  );
};
export default SearchResults;