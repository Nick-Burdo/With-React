/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <li>
                <Link {...this.props} activeClassName="active"/>
            </li>
        );
    }
});

