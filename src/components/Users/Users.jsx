import classes from './Users.module.css';
import axios from 'axios'
import userIcon from './../../assets/images/userIcon.png'
import React from 'react';
import styles from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setTotal(response.data.totalCount)
        this.props.setUsers(response.data.items)
      })
  }

  setPage(i) {
    this.props.setPage(i);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let navArr = []
    for (let i = 1; i <= (Math.ceil(this.props.totalCount / this.props.pageSize)); i++) {
      navArr.push(
        <span
          className={this.props.currentPage == i && styles.selectedPage}
          onClick={() => {this.setPage(i)}}
        >{i}</span>
      )
    }
    return (
      <div>
        {navArr}
        {
          this.props.users.map(item => {
            return (
              <div>
                <span>
                  <div>
                    <img className={classes.img} src={item.photo ? item.photo : userIcon} alt="" />
                  </div>
                  <div>
                    {
                      item.followed ? <button onClick={() => {this.props.follow(item.id)}}>Unfollow</button> : <button onClick={() => {this.props.unfollow(item.id)}}>Follow</button>
                    }
                  </div>
                </span>
                <span>
                  <span>
                    <div>{item.name}</div>
                    <div>{item.status}</div>
                  </span>
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Users;