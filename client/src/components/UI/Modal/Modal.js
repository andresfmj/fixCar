import React from 'react';

import './Modal.scss';

function Modal(props) {

    return (
        <div className="Modal" style={{ display: props.show ? 'block' : 'none' }}>
            <div className="Modal-inner">{props.children}</div>
        </div>
    )
}

export default Modal;
