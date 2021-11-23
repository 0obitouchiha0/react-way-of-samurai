const Profile = () => {
  return (
    <main className="main">
        <div className="main__header">
          <img src="https://c4.wallpaperflare.com/wallpaper/855/699/771/pexels-photo-101472-1024x683-pexels-photo-101472-1024x683-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="main__desc">
          <div className="main__avatar">
            <img src="https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg" alt="" />
          </div>
        </div>
        <div className="main__posts">
          <div className="main__post__title">
            My posts
          </div>
          <div className="post">
            New post
          </div>
          <div className="post">
            post1
          </div>
          <div className="post">
            post2
          </div>
        </div>
      </main>
  )
}

export default Profile;