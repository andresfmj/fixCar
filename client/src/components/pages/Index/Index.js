import React from 'react';
import { connect } from 'react-redux';

import Client from '../../UI/Clients/Clients';
import ClientRow from '../../UI/Clients/ClientRow';

function Index(props) {

    return (
        <div className='Index'>
            {props.loading ? <p>Loading clients...</p> : null}
            <Client>
                <ClientRow clients={props.clients} />
            </Client>
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

export default connect(mapStateToProps)(Index);
