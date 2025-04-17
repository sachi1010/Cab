import React, { useState } from 'react';
import '../css/Login.css';

export const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowSignup(!showSignup);
  };

  return (
    <div className="Account">
      {/* Login Form */}
      {!showSignup && (
        <form className="login-page">
          <h2>Login</h2>
          <p>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </p>
          <p>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </p>
          <p>
            <a href="#">Forgot password?</a>
          </p>
          <p className="signup-link">
            Not registered? <a href="#" onClick={handleToggle}>Create an account</a>
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      )}

      {/* Signup Form */}
      {showSignup && (
        <form className="signup-page">
          <h2>Sign Up</h2>
          <p>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </p>
          <p>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required />
          </p>
          <p className="signup-link">
            Already have an account? <a href="#" onClick={handleToggle}>Go to login</a>
          </p>
          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
      )}
    </div>
  );
};
