/**
 * Created by tigra on 14.07.16.
 */
'use strict';

import React from 'react';

export default React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="tutorial">
                {this.props.children}
            </div>
        );
    }
});

