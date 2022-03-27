import React from 'react';
import PropTypes from 'prop-types';
import iconLoading from './img/Spinner-1s-200px.gif';
PostList.propTypes = {
    posts: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
};

PostList.defaultProps = {
    posts: [],
}
function PostList(props) {
    const { posts, isLoading } = props;
    return <>
        {
            isLoading ? (
                <img src={iconLoading} alt="" />
            ) :
                (
                    <ul className="post-list">
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                )
        }
    </>

}

export default PostList;