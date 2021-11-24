import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="" />
      <p>{props.text}</p>
      <p>like({props.likeCount})</p>
    </div>
  )
}

export default Post;