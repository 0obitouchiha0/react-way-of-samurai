const followActionCreator = (userId) => {
  return {
    type: 'follow',
    userId: userId
  }
};
const unfollowActionCreator = (userId) => {
  return {
    type: 'unfollow',
    userId: userId
  }
};

const setUsersActionCreator = (users) => {
  return {
    type: 'setUsers',
    users: users
  }
}

const setPageActionCreator = (currentPage) => {
  return {
    type: 'setPage',
    currentPage: currentPage
  }
}

const setTotalActionCreator = (total) => {
  return {
    type: 'setTotal',
    totalCount: total
  }
}

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 3
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'follow': {
      return {
        ...state, 
        users: state.users.map(item => {
          if(item.id == action.userId) {
            return {...item, isFollower: true};
          }
          return item;
        })
      };
    }
    case 'unfollow': {
      return {
        ...state, 
        users: state.users.map(item => {
          if(item.id == action.userId) {
            return {...item, isFollower: false};
          }
          return item;
        })
      };
    }

    case 'setUsers': {
      return {...state, users: [...action.users]};
    }

    case 'setPage': {
      return {...state, currentPage: action.currentPage}
    }

    case 'setTotal': {
      return {...state, totalCount: action.totalCount}
    }
    default:
      return state;
  }
}

export {usersReducer, followActionCreator, unfollowActionCreator, setUsersActionCreator, setPageActionCreator, setTotalActionCreator};