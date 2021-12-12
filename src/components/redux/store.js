import { dialogReducer } from './dialogReducer';
import { profileReducer } from './profileReducer';

let store = {
  _state: {
    profile: {
      postsData: [
        { id: 0, text: 'gov', likesCount: 21 },
        { id: 1, text: 'zalupa', likesCount: 2 },
        { id: 2, text: 'penis', likesCount: 1 },
        { id: 3, text: 'her', likesCount: 241 }
      ],

      currentValue: ''
    },

    dialog: {
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
    },
  },

  renderApp() {
    return 0
  },

  dispatch(action) {
    dialogReducer(store._state.dialog, action);
    profileReducer(store._state.profile, action);
    store.renderApp(store._state, store.dispatch);
  },
  subscribe(observer) {
    this.renderApp = observer;
  }
}

export default store;