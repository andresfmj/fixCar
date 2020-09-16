import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NewClient.scss';

import { createClient } from '../../../store/actions';


function NewClient(props) {
    const [form, setForm] = useState({
        names: '',
        lastNames: '',
        email: '',
        streetAddress: ''
    })

    const handleSubmit = ev => {
        ev.preventDefault()
        if (form.names && form.lastNames && form.email && form.streetAddress) {
            props.createClient(form)
            setTimeout(() => {
                props.history.replace('/')
            }, 1000)
        } else {
            alert('Por favor complete los datos del formulario')
        }
    }

    const handleInputChange = (ev) => {
        setForm({
            ...form,
            [ev.target.name]: ev.target.value
        })
    }

    return (
        <div className='NewClient'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Registra un nuevo cliente</legend>
                    <div className="input-group">
                        <label>Nombres:</label>
                        <div className="input-form">
                            <input type="text" name='names' autoComplete='off' value={form.names} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Apellidos:</label>
                        <div className="input-form">
                            <input type="text" name='lastNames' autoComplete='off' value={form.lastNames} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Direccion:</label>
                        <div className="input-form">
                            <input type="text" name='streetAddress' 
                                placeholder='Direccion de domicilio' autoComplete='off' value={form.streetAddress} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Email: </label>
                        <div className="input-form">
                            <input type="text" name='email' autoComplete='off' value={form.email} onChange={handleInputChange} />
                        </div>
                    </div>
                    {
                        props.error 
                            ?
                                (
                                    <div className="alert alert-warning">
                                        <p>{props.error}</p>
                                    </div>
                                )
                            : null
                    }
                    <div className="input-group">
                        <button className='button-large button-primary' disabled={props.loading}>{`${props.loading ? 'Enviando datos...' : 'Enviar'}`}</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.creatingClient,
    error: state.errorCreating
})

const mapDispatchToProps = {
    createClient
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewClient));
