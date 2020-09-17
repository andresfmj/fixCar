import React, { useState } from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom';
import { createPortal } from 'react-dom';


import './FixesByCar.scss';

import Overlay from '../UI/Overlay/Overlay';
import Modal from '../UI/Modal/Modal';
import NewFixCar from '../NewFixCar/NewFixCar';


function FixesByCar(props) {
    const [newFixModal, setNewFixModal] = useState(false)

    const routeMatch = useRouteMatch()

    const carId = routeMatch.params.carId
    const clientId = routeMatch.params.clientId

    const toggleNewFixModal = () => {
        setNewFixModal(!newFixModal)
    }

    return (
        <div className="FixesByCar">
            <header>
                <h2>Reparaciones del auto</h2>
                <button className='button button-primary' onClick={toggleNewFixModal}>nueva reparacion</button>
                { createPortal(<Overlay show={newFixModal} clicked={toggleNewFixModal} />, document.getElementById('modal')) }
                <Modal show={newFixModal}>
                    <NewFixCar clientId={clientId} carId={carId} />
                </Modal>
            </header>
        </div>
    )
}

export default withRouter(FixesByCar);
