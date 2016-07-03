/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';

const WidgetList = React.createClass({
    render: function () {
        return (
            <ul className="widget-list">
                <li>Widget Dan</li>
                <li>Widget Ryan</li>
                <li>Widget Michael</li>
            </ul>
        );
    }
});

export default WidgetList;