import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div className={classes.main__posts}>
      <div className={classes.main__posts__title}>
        My posts
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;