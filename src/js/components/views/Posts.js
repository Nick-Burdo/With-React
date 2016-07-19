/**
 * Created by tigra on 19.07.16.
 */
'use strict';

import React, { PropTypes } from 'react'

const Posts = ({posts}) => (
    <ul>
        {posts.map((post, i) =>
            <li key={i}>{post.title}</li>
        )}
    </ul>
);

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts;

