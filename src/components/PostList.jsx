import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostList() {
    const posts = useLoaderData();
    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={Math.random()} body={post.body} author={post.author} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>No posts found.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}
export default PostList;