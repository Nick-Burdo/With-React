/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h3>
                    Repo {this.props.params.repoName}
                    <small> ({this.props.params.userName}) </small>
                </h3>
            </div>
        );
    }
});

