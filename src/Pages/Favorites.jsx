import { useState, useEffect } from "react";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (image) => {
    let updated = favorites.filter((item) => item !== image);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-page">
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p>Your favorite outfits will appear here.</p>
      ) : (
        <div className="outfit-container">
          {favorites.map((image, index) => (
            <div className="outfit-card" key={index}>
              <img src={image} alt={`Favorite ${index + 1}`} />
              <button
                className="shop-btn"
                onClick={() => removeFavorite(image)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;