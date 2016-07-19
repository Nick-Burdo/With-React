/**
 * Created by tigra on 19.07.16.
 */
'use strict';

import React, {PropTypes} from 'react';

const Picker = ({value, options, onChange}) => (
    <div>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
            {options.map(option =>
                <option value={option} key={option}>
                    {option}
                </option>)
            }
        </select>
      </div>

);

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Picker;