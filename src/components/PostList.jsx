import { useState, useEffect }  from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostList({isPosting, onStopPosting}) {
    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((prevPosts) => {
            return [postData, ...prevPosts];
        });
    }

    return (
        <>
            {isPosting && ( 
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                        />
                </Modal>
            )}
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