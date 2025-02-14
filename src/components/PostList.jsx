import Post from './Post';
import classes from './PostsList.module.css';

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Maximilian" body="React rules" />
            <Post author="Miguel" body="me gusta protos" />
        </ul>
    )
}
export default PostList;