import React from 'react';

import './Overlay.scss';


function Overlay(props) {
    return (
        <div 
            className="Overlay" 
            style={{ display: props.show ? 'block' : 'none' }}
            onClick={props.clicked}></div>
    )
}

export default Overlay;
