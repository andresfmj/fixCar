import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NewCar.scss';

import { createCarInit } from '../../store/actions';

function NewCar(props) {
    const [form, setForm] = useState({
        brand: '',
        model: '',
        emailclient: props.client.email
    })

    const handleInput = ev => {
        setForm({
            ...form,
            [ev.target.name]: ev.target.value
        })
    }

    const handleSubmit = ev => {
        ev.preventDefault()
        props.createCarInit(form)
        setTimeout(() => {
            props.history.replace('/')
        }, 2000)
    }
    
    return (
        <div className='NewCar'>
            <h2>Nuevo Auto</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Marca:</label>
                    <div className="input-form">
                        <input type="text" name='brand' autoComplete='off' value={form.brand} onChange={handleInput} />
                    </div>
                </div>
                <div className="input-group">
                    <label>Modelo:</label>
                    <div className="input-form">
                        <input type="text" name='model' autoComplete='off' value={form.model} onChange={handleInput} />
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
    createCarInit
}

export default withRouter(connect(null, mapDispatchToProps)(NewCar));
