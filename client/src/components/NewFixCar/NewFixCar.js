import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addFixCarInit } from '../../store/actions';

function NewFixCar(props) {
    const [form, setForm] = useState({
        observ: '',
        client_id: props.clientId,
        car_id: props.carId
    })

    const handleInput = ev => {
        setForm({
            ...form,
            [ev.target.name]: ev.target.value
        })
    }

    const handleSubmit = ev => {
        ev.preventDefault()
        props.addFixCarInit(form)
        setTimeout(() => {
            props.history.replace('/')
        }, 2000)
    }


    return (
        <div className="NewFixCar">
            <h2>Nueva reparacion</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Observaciones encontradas:</label>
                    <div className="input-form">
                        <textarea name='observ' onChange={handleInput} style={{ width: '100%' }} value={form.observ} />
                    </div>
                </div>
                <div className="input-group">
                    <button className='button-large button-primary'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addFixCarInit
}


export default withRouter(connect(null, mapDispatchToProps)(NewFixCar));
