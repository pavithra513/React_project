import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter both email and password");
      return;
    }

    alert("Login successful! Welcome to StyleMate 💖");

  navigate("/occasion");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <p className="login-brand">STYLEMATE</p>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to find your perfect outfit
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account? <span>Sign Up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;