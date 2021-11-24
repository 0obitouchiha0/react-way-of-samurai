import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <a href="/profile" className="active"> Profile</a>
          </li>
          <li>
            <a href="/dialogs"> Messages</a>
          </li>
          <li>
            <a href="/news"> News</a>
          </li>
          <li>
            <a href="/music"> Music</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;