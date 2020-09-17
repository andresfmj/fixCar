import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

import NewCar from '../../NewCar/NewCar';
import Modal from '../../UI/Modal/Modal';
import Overlay from '../../UI/Overlay/Overlay';

import './Cars.scss';

function Cars(props) {
    const [newCarModal, setNewCarModal] = useState(false)

    const routeParams = useParams()

    let selectedClient = props.clients.length > 0 ? props.clients.find(v => v._id === routeParams.clientId) : null
    let carsByClient = selectedClient && selectedClient.car && selectedClient.car.map(c => {
        return c
    })

    const toggleNewCarWindow = () => {
        setNewCarModal(!newCarModal)
    }

    const redirectFixesPage = (carId, clientId) => {
        props.history.push(`/client/${clientId}/cars/${carId}/fixes`)
    }

    return (
        <div className="Cars"> 
            {
                selectedClient
                    ?
                        (
                            <React.Fragment>
                                <header>
                                    <h2>Autos de {`${selectedClient.names} ${selectedClient.lastNames}`}</h2>
                                    <button className="button button-primary" onClick={toggleNewCarWindow}>nuevo auto</button>
                                    { createPortal(<Overlay show={newCarModal} clicked={toggleNewCarWindow} />, document.getElementById('modal')) }
                                    <Modal show={newCarModal}>
                                        <NewCar client={selectedClient} />
                                    </Modal>
                                </header>
                                <div className='CarsList'>
                                    <ul>
                                        {carsByClient.map(c => (
                                            <li key={c._id}>
                                                <div>{c.brand} {c.model}</div>
                                                <div>{c.created_at}</div>
                                                {c.fixes && <button className='button button-primary' onClick={() => redirectFixesPage(c._id, selectedClient._id)}>reparaciones</button>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </React.Fragment>
                        )
                    : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    clients: state.clients
})

export default withRouter(connect(mapStateToProps)(Cars));
