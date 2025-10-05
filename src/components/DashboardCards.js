import React from 'react';

function DashboardCards() {
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        marginTop: '20px',
    };

    const cardStyle = {
        flex: 1,
        maxWidth: '200px',
        padding: '50px',
        backgroundColor: '#ffffffff',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
        fontFamily: 'Arial',
    };

    return (
        <div style={cardContainerStyle}>
            <div style={cardStyle}>
                <h3>Items</h3>
                <p>good items</p>
            </div>
            <div style={cardStyle}>
                <h3>Stocks</h3>
                <p>pirang stocks</p>
            </div>
            <div style={cardStyle}>
                <h3>Lost Items</h3>
                <p>su nawara</p>
            </div>
        </div>
    );
}

export default DashboardCards;
