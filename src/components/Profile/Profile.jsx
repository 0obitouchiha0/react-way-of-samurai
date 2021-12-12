import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
  return (
    <main className={classes.main}>
        <ProfileInfo />
        <MyPostsContainer />
    </main>
  )
}

export default Profile;