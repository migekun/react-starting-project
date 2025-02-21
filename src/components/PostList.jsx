import { useState }  from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {isPosting && ( 
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onBodyChange={bodyChangeHandler} 
                        onAuthorChange={authorChangeHandler}
                        onCancel={onStopPosting}
                        />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Miguel" body="me gusta protos" />
            </ul>
        </>
    )
}
export default PostList;