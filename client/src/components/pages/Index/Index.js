import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchClientsList } from '../../../store/actions';

function Index(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.fetchClientsList()
    }, [])

    return (
        <div className='Index'>
            <h2>Index Page</h2>
            <p>WIP</p>
            {props.loading ? <p>Loading clients...</p> : null}
            <ul>
                {props.clients && props.clients.map(i => (
                    <li key={i._id}>{`${i.names} ${i.lastNames}`}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => (
    {
        clients: state.clients,
        loading: state.loadingClients,
        error: state.errorClients
    }
)

const mapDispathToProps = {
    fetchClientsList
}

export default connect(mapStateToProps, mapDispathToProps)(Index);
