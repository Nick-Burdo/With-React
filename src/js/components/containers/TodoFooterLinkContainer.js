/**
 * Created by tigra on 17.07.16.
 */
'use strict';

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todo-actions';
import Link from '../views/TodoFooterLink';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const TodoFooterLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default TodoFooterLinkContainer;
