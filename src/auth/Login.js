import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();

  const containerStyle = {
    width: '250px',
    margin: '200px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    textAlign: 'center'
  };

  const formGroupStyle = {
    marginBottom: '12px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box'
  };

  const buttonStyle2 = {
    display: 'block',
    margin: '0 auto',
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'Admin' && password === '123') {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="username">Username:</label><br />
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="Admin"
              style={inputStyle}
              required
              />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="123"
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle2}>
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
