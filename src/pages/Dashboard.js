

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DashboardCards from '../components/DashboardCards';

function Dashboard() {
    const sidebarStyle = {
        width: '200px',
        height: '100vh',
        backgroundColor: '#000000ff',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    };

    const menuItemStyle = {
        display: 'block',
        padding: '10px 0',
        textDecoration: 'none',
        color: 'white',
        fontSize: '16px',
    };

    const mainContentStyle = {
        flex: 1,
        padding: '20px',
    };

    const containerStyle = {
        display: 'flex',
    };

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                <div style={sidebarStyle}>
                    <h2 style={{ color: 'white' }}>Menu</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/dashboard" style={menuItemStyle}>Home</Link></li>
                        <li><Link to="/items" style={menuItemStyle}>Items</Link></li>
                        <li><Link to="/stocks" style={menuItemStyle}>Stocks</Link></li>
                        <li><Link to="/reports" style={menuItemStyle}>Reports</Link></li>
                        <li><Link to="/settings" style={menuItemStyle}>Settings</Link></li>
                    </ul>
                    <div style={{ position: 'absolute', bottom: '20px', width: '160px' }}>
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to log out?')) {
                                    window.location.href = '/login';
                                }
                            }}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#000000ff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
                <div style={mainContentStyle}>
                    <h1>Dashboard</h1>
                    <DashboardCards />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
