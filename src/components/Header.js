import React from 'react';

function Header() {
    const headerStyle = {
        width: '100%',
        backgroundColor: '#ffffffff',
        padding: '1px',
        textAlign: 'center',
        margin: 0,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontFamily: 'Arial',
        borderBottom: '2px solid #747474ff',
        color: '#000000ff',
        fontSize: '12px',
    };

    return (
        <div style={headerStyle}>
            <h1>Inventory Management System</h1>
        </div>
    );
}

export default Header;
