import Users from './Users';
import {connect} from 'react-redux';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setPageActionCreator, setTotalActionCreator} from './../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId))
    },
    unfollow: userId => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users))
    },
    setPage: page => {
      dispatch(setPageActionCreator(page))
    },
    setTotal: total => {
      dispatch(setTotalActionCreator(total))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);