import React from 'react';

import './Clients.scss';

function Clients({ children }) {

    return (
        <div className='Clients'>
            <h2>Listado de Clientes</h2>
            <ul>{ children }</ul>
        </div>
    )
}

export default Clients;
