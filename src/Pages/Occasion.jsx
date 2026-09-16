import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OccasionCard from "../components/OccasionCard";

function Occasion() {

  const [selectedOccasion, setSelectedOccasion] = useState("");

  const navigate = useNavigate();

  const occasions = [
    {
      name: "Wedding",
      icon: "💍",
      description: "Elegant outfits for weddings"
    },
    {
      name: "Party",
      icon: "🎉",
      description: "Trendy outfits for parties"
    },
    {
      name: "Office",
      icon: "💼",
      description: "Professional office outfits"
    },
    {
      name: "Casual",
      icon: "🌸",
      description: "Comfortable everyday outfits"
    },
    {
      name: "Birthday",
      icon: "🎂",
      description: "Stylish birthday outfits"
    },
    {
      name: "Traditional",
      icon: "🛕",
      description: "Beautiful traditional outfits"
    }
  ];

  const handleOccasion = (occasion) => {
    setSelectedOccasion(occasion);
  };

  const handleNext = () => {

    if (selectedOccasion === "") {
      alert("Please select an occasion");
      return;
    }

    navigate("/recommendations", {
      state: {
        occasion: selectedOccasion
      }
    });
  };

  return (
    <div className="occasion-page">

      <h1>Choose Your Occasion</h1>

      <p>
        Select an occasion to find the perfect outfit
      </p>

      <div className="occasion-container">

        {occasions.map((occasion) => (
          <OccasionCard
            key={occasion.name}
            name={occasion.name}
            icon={occasion.icon}
            description={occasion.description}
            selected={selectedOccasion === occasion.name}
            onClick={() => handleOccasion(occasion.name)}
          />
        ))}

      </div>

      <button onClick={handleNext}>
        Continue
      </button>

    </div>
  );
}

export default Occasion;