import React from 'react';
import classes from './MyPosts.module.css';
import {addLetterActionCreator, addPostActionCreator} from './../../redux/profileReducer';
import MyPosts from './MyPosts';
import {storeContext} from '../../../storeContext';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//     return (
//     <storeContext.Consumer> 
//       {
//         (store) => {
//           const addNewPost = (postText) => {
//             store.dispatch(addPostActionCreator(postText));
//             store.dispatch(addLetterActionCreator(postText, ''));
//           }
          
//           const change = (postText) => {
//             store.dispatch(addLetterActionCreator(postText, postText.current.value))
//           }
//           return (
//             <MyPosts 
//               post={store.getState().profile.postsData}
//               value={store.getState().profile.currentValue}
//               addLetter={change}
//               addPost={addNewPost}
//             />
//           )
//         }
//       }
//     </storeContext.Consumer>
//   )
// }

const mapStateToProps = state => {
  return {
    post: state.profile.postsData,
    value: state.profile.currentValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLetter: (postText) => {
      dispatch(addLetterActionCreator(postText, postText.current.value))
    },
    addPost: (postText) => {
        dispatch(addPostActionCreator(postText));
        dispatch(addLetterActionCreator(postText, ''));
      }
    }
  }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;