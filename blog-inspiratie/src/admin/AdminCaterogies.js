import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminCategories() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  const actionsByCategory = {
    books: [
      { label: '➕ Creează carte', path: '/admin/books' },
      { label: '📝 Creează recenzie', path: '/admin/books/review' },
    ],
    recipes: [
      { label: '🍲 Creează rețetă', path: '/admin/recipes' },
      { label: '📝 Creează recenzie rețetă', path: '/admin/recipes/detail' },
    ],
    fitness: [
      { label: '🏋️ Creează antrenament', path: '/admin/fitness' },
      { label: '📝 Creează exercițiu', path: '/admin/fitness/detail' },
    ],
    mindfulness: [
      { label: '🧘 Creează sesiune', path: '/admin/mindfulness' },
      { label: '📝 Creează reflecție', path: '/admin/mindfulness/detail' },
    ],
  };

  return (
    <div className="admin-containere">
      <h1 className="admin-titles">🌟 Administrare categorii</h1>

      <div className="admin-grid">
        <div className="category-list">
          <div onClick={() => handleSelect('books')} className={`category-card ${selectedCategory === 'books' ? 'active' : ''}`}>📚 Cărți</div>
          <div onClick={() => handleSelect('recipes')} className={`category-card ${selectedCategory === 'recipes' ? 'active' : ''}`}>🍽️ Rețete</div>
          <div onClick={() => handleSelect('fitness')} className={`category-card ${selectedCategory === 'fitness' ? 'active' : ''}`}>🏋️‍♀️ Fitness</div>
          <div onClick={() => handleSelect('mindfulness')} className={`category-card ${selectedCategory === 'mindfulness' ? 'active' : ''}`}>🧘 Mindfulness</div>
        </div>

        <div className="actions-panel">
          {selectedCategory && actionsByCategory[selectedCategory]?.map((action, index) => (
            <div key={index} className="action-card" onClick={() => navigate(action.path)}>
              {action.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
