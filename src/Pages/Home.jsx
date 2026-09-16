import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Outfyx</h1>

      <h2>Find Your Perfect Outfit</h2>

      <p>
        Choose an occasion and discover the perfect outfit for your style.
      </p>

      <Link to="/occasion">
        <button>Explore Styles</button>
      </Link>
    </div>
  );
}

export default Home;