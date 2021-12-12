import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends.jsx';

const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink to="/profile"> Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs"> Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news"> News</NavLink>
          </li>
          <li>
            <NavLink to="/music"> Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
        <Friends />
      </nav>
  )
}

export default Nav;