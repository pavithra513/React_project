import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import outfits from "../Data/outfits";

function Recommendations() {

  const location = useLocation();
  const selectedOccasion = location.state?.occasion;

  const key = selectedOccasion
    ? selectedOccasion.toLowerCase()
    : "";

  const images = outfits[key] || [];

  const [favorites, setFavorites] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  
  const prices = [1499, 1799, 1299, 1999, 1599, 1899];

  
  const offers = [20, 30, 15, 25, 35, 40];

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  const toggleFavorite = (image) => {

    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (saved.includes(image)) {
      updated = saved.filter((item) => item !== image);
    } else {
      updated = [...saved, image];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setFavorites(updated);
  };

  
  const handleSizeChange = (index, size) => {
    setSelectedSizes({
      ...selectedSizes,
      [index]: size
    });
  };

  return (
    <div className="recommendations-page">

      <h1>Recommended Outfits</h1>

      <p>
        Perfect outfits for your {selectedOccasion}
      </p>

      <div className="outfit-container">

        {images.length === 0 ? (

          <p>No outfits found for this occasion.</p>

        ) : (

          images.map((image, index) => {

            const isFav = favorites.includes(image);

            const price = prices[index % prices.length];
            const offer = offers[index % offers.length];

            const discountPrice =
              Math.round(price - (price * offer) / 100);

            return (

              <div className="outfit-card" key={index}>

            
                <div className="outfit-img-wrapper">

                  <img
                    src={image}
                    alt={`Outfit ${index + 1}`}
                  />

                  <button
                    className="heart-icon"
                    onClick={() =>
                      toggleFavorite(image)
                    }
                  >
                    {isFav ? "❤️" : "🤍"}
                  </button>

                </div>

              
                <div className="product-details">

                 
                  <div className="price-section">

                    <span className="discount-price">
                      ₹{discountPrice}
                    </span>

                    <span className="original-price">
                      ₹{price}
                    </span>

                    <span className="offer">
                      {offer}% OFF
                    </span>

                  </div>

                  {/* Size */}
                  <div className="size-section">

                    <p>Select Size:</p>

                    <div className="size-buttons">

                      {["S", "M", "L", "XL"].map(
                        (size) => (

                          <button
                            key={size}
                            className={
                              selectedSizes[index] === size
                                ? "size-btn selected"
                                : "size-btn"
                            }
                            onClick={() =>
                              handleSizeChange(
                                index,
                                size
                              )
                            }
                          >
                            {size}
                          </button>

                        )
                      )}

                    </div>

                  </div>

                </div>

                {/* Shop Button */}
                <button className="shop-btn">
                  Shop This Look 🛍️
                </button>

              </div>

            );
          })

        )}

      </div>

    </div>
  );
}

export default Recommendations;