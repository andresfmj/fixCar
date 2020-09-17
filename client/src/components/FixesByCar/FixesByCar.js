import React, { useEffect, useState } from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';


import './FixesByCar.scss';

import Overlay from '../UI/Overlay/Overlay';
import Modal from '../UI/Modal/Modal';
import NewFixCar from '../NewFixCar/NewFixCar';

import { fetchFixCarInit } from '../../store/actions';


function FixesByCar(props) {
    const [newFixModal, setNewFixModal] = useState(false)

    const routeMatch = useRouteMatch()

    const carId = routeMatch.params.carId
    const clientId = routeMatch.params.clientId

    const toggleNewFixModal = () => {
        setNewFixModal(!newFixModal)
    }

    useEffect(() => {
        props.fetchFixCarInit(carId)
    }, [])

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
            <div className='Fixes-List'>
                {props.loadingFixes ? <p>Cargando reparaciones...</p> : null}
                {props.errorFixes ? <p>{props.errorFixes}</p> : null}
                {
                    <ul>
                        {props.carFixes && props.carFixes.map(i => (
                            <li key={i._id}>
                                <p>{i.observ}</p>
                                <p>{i.created_at}</p>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    fetchFixCarInit
}

const mapStateToProps = state => ({
    carFixes: state.carFixes,
    loadingFixes: state.loadingFixes,
    errorFixes: state.errorFixes
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FixesByCar));
