import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div className={classes.main__posts}>
      <div className={classes.main__posts__title}>
        My posts
      </div>
      <Post text="post 1" likeCount="21"/>
      <Post text="post 2" likeCount="2"/>
      <Post text="post 3" likeCount="1"/>
      <Post text="post 4" likeCount="241"/>
    </div>
  )
}

export default MyPosts;