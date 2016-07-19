/**
 * Created by tigra on 19.07.16.
 */
'use strict';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../actions/reddit-actions';

import Picker from '../views/Picker';
import Posts from '../views/Posts';

const Reddit = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            nextProps.dispatch(fetchPostsIfNeeded(nextProps.selectedSubreddit))
        }
    },
    render: function () {
        return (
            <div>
                <Picker value={this.props.selectedSubreddit}
                        onChange={this.handleChange}
                        options={['reactjs', 'frontend']}
                />

                <p>
                    {this.props.lastUpdated &&
                    <span>
                        Last updated at {new Date(this.props.lastUpdated).toLocaleTimeString()}. {' '}
                    </span>}

                    {!this.props.isFetching &&
                    <a href='#'
                       onClick={this.handleRefreshClick}>
                        Refresh
                    </a>}
                </p>

                {this.props.isFetching && this.props.posts.length === 0 &&
                <h2>Loading...</h2>}

                {!this.props.isFetching && this.props.posts.length === 0 &&
                <h2>Empty.</h2>}

                {this.props.posts.length > 0 &&
                <div style={{ opacity: this.props.isFetching ? 0.5 : 1 }}>
                    <Posts posts={this.props.posts} />
                </div>
                }
            </div>
        );
    },
    handleChange: function (nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit));
    },
    handleRefreshClick: function(e) {
        e.preventDefault();
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
});

Reddit.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

const RedditContainer = connect(mapStateToProps)(Reddit);

export default RedditContainer;
