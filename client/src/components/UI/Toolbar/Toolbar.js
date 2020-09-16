import React from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.scss';

function Toolbar(props) {

    return (
        <nav className='Toolbar'>
            <div className="nav">
                <header>
                    <h2>
                        <Link to='/'>Control de Autos</Link>
                    </h2>
                </header>
            </div>
        </nav>
    )
}

export default Toolbar;
