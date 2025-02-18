import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Maximilian" body="React rules" />
                <Post author="Miguel" body="me gusta protos" />
            </ul>
        </>
    )
}
export default PostList;