
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const containerStyle = {
    
    width : '250px',
    margin: '200px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };
  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#333',
  };
  const buttonStyle = {
    padding: '12px 32px',
    fontSize: '1rem',
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '32px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  };

  return (
    <>
    <div style={containerStyle}>
      <h1 style={titleStyle}>Inventory Management System</h1>
      <Link to="/login">
      <button style={buttonStyle}>Log In</button>
      </Link>
    </div>
    <Footer />
    </>
  );
}

export default App;
