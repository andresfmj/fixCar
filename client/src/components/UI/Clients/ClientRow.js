import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchClientsList } from '../../../store/actions';

import './ClientRow.scss';

function ClientRow(props) {

    const handleRegisteredCars = (clientId) => {
        props.history.push(`/client/${clientId}/cars`)
    }

    const handleMoreInfo = () => {
        console.log(props)
    }

    useEffect(() => {
        props.fetchClientsList()
    }, [])

    return (
        props.clients && props.clients.map(i => (
            <li key={i._id} className='ClientRow'>
                <div className="header-title">
                    <h2>{`${i.names} ${i.lastNames}`}</h2>
                    <h4>{`${i.created_at}`}</h4>
                </div>
                <div className="actions-links">
                    <button className='button button-primary' onClick={() => handleRegisteredCars(i._id)}>Ver autos registrados</button>
                    <button className='button button-primary' onClick={handleMoreInfo}>Info adicional</button>
                </div>
            </li>
        ))
    )
}

const mapDispathToProps = {
    fetchClientsList
}

export default withRouter(connect(null, mapDispathToProps)(ClientRow));
