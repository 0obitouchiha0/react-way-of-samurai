const addPostActionCreator = postText => {
  return {
    type: 'add-post',
    postText: postText,
    value: postText.value
  }
}

const addLetterActionCreator = (postText, value) => {
  return {
    type: 'add-letter',
    postText: postText,
    value: value
  }
}

let initialState = {
    postsData: [
      { id: 0, text: 'gov', likesCount: 21 },
      { id: 1, text: 'zalupa', likesCount: 2 },
      { id: 2, text: 'penis', likesCount: 1 },
      { id: 3, text: 'her', likesCount: 241 }
    ],

    currentValue: ''
  }


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add-letter': 
      let newState = {...state};
      newState.currentValue = action.value;
      return newState;
    case 'add-post': {
      let newPost = {
        id: state.postsData.length,
        text: action.postText.current.value,
        likesCount: 0
      };
      let newState = {...state};
      newState.postsData = [...state.postsData];
      newState.postsData.push(newPost);
      newState.currentValue = '';
      return newState;
    }
    default:
      return state;
  }
  

}

export {profileReducer, addLetterActionCreator, addPostActionCreator};