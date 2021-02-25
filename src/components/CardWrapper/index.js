import React from 'react';
import './style.css';


// This allows the team directory cards to wrap in a grid (max 4) and stack on smaller screens.
function CardWrapper({ children }) {
    return (
        <div className="wrapper">{children}</div>
    )
}


export default CardWrapper;