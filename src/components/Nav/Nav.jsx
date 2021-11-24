import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <a href="/Profile" className="active"> Profile</a>
          </li>
          <li>
            <a href="/Dialogs"> Messages</a>
          </li>
          <li>
            <a href=""> News</a>
          </li>
          <li>
            <a href=""> Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;