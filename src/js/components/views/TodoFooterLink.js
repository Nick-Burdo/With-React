/**
 * Created by tigra on 17.07.16.
 */
'use strict';

import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span className="active">{children}</span>
    }

    return (
        <a href="#"
           onClick={e => {
         e.preventDefault()
         onClick()
       }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link