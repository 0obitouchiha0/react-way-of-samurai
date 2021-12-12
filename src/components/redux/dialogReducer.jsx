const addMessageActionCreator = messageText => {
  return {
    type: 'add-message',
    messageText: messageText,
    value: messageText.current.value
  }
}

const addLetterMessageActionCreator = messageText => {
  return {
    type: 'add-letter-message',
    messageText: messageText,
    value: messageText.value
  }
}

let initialState = {
  dialogsData: [
    { id: 0, name: 'Jessey Pinkman' },
    { id: 1, name: 'Michael Jordan' },
    { id: 2, name: 'Barak Obama' }
  ],

  messagesData: [
    { id: 0, text: 'govno' },
    { id: 1, text: 'zalupa' },
    { id: 2, text: 'penis' },
    { id: 3, text: 'her' }
  ],

  currentValue: ''
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add-letter-message': {
      let newState = { ...state };
      newState.currentValue = action.value;
      return newState;
    }
    case 'add-message': {
      let newMessage = {
        id: state.messagesData.length,
        text: action.value
      };
      let newState = { ...state };
      newState.messagesData = [...state.messagesData];
      newState.messagesData.push(newMessage);
      newState.currentValue = '';
      return newState;
    }
    default:
      return state;
  }
}

export { dialogReducer, addLetterMessageActionCreator, addMessageActionCreator };