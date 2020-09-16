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
                <div className="navbar">
                    <ul>
                        <li className='menu-header'>
                            <span className='menu'>Clientes</span>
                            <ul className='submenu'>
                                <li><Link to='/client/new'>Create</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Toolbar;
