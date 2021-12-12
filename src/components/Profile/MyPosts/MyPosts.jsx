import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
  let postsData = props.post;

  let postsElements = postsData.map(item => {
    return <Post id={item.id} text={item.text} likesCount={item.likesCount}/>
  })

  let postText = React.createRef();
  const addNewPost = () => {
    props.addPost(postText);
  }
  
  const change = () => {
    props.addLetter(postText);
  }
  return (
    <div className={classes.main__posts}>
      <div className={classes.main__posts__title}>
        My posts
      </div>
      <textarea ref={postText} onChange={change} value={props.value}/>
      <button onClick={addNewPost}>add post</button>
      {postsElements}
    </div>
  )
}

export default MyPosts;