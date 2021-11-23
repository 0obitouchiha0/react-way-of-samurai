import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return (
    <main className={classes.main}>
        <div className={classes.main__header}>
          <img src="https://c4.wallpaperflare.com/wallpaper/855/699/771/pexels-photo-101472-1024x683-pexels-photo-101472-1024x683-wallpaper-preview.jpg" alt="" />
        </div>
        <div className={classes.main__desc}>
          <div className={classes.main__avatar}>
            <img src="https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg" alt="" />
          </div>
        </div>
        <MyPosts />
    </main>
  )
}

export default Profile;