import React from 'react';

import './Clients.scss';

function Clients(props) {
    const Messages = props.messages

    return (
        <div className='Clients'>
            <h2>Listado de Clientes</h2>
            { <Messages /> }
            <ul>{ props.children }</ul>
        </div>
    )
}

export default Clients;
