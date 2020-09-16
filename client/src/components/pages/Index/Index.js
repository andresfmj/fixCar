import React from 'react';
import { connect } from 'react-redux';

import Client from '../../UI/Clients/Clients';
import ClientRow from '../../UI/Clients/ClientRow';

function Index(props) {

    return (
        <div className='Index'>
            <Client messages={() => (
                <React.Fragment>
                    <div className='loading'>
                        {props.loading ? <p>Loading clients...</p> : null}
                    </div>
                    <div>
                        {props.error ? <p className='text-center'>{props.error}</p> : null}
                    </div>
                </React.Fragment>
            )}>
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
