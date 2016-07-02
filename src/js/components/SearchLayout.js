/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="search">
                <header className="search-header">
                    Search users
                </header>
                <div className="search-results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination">
                    4 result
                </div>
            </div>
        );
    }
});


