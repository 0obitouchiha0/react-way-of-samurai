import classes from './Friends.module.css';

const Friends = () => {
  return (
    <div className={classes.friends}>
      <h1>Friends</h1>
      <ul>
        <li>
          <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" />
        </li>
        <li>
          <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" />
        </li>
        <li>
          <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" />
        </li>
      </ul>
    </div>
  )
}

export default Friends;