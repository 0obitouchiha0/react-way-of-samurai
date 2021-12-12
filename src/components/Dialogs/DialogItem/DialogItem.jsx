import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = props => {
  let link = `/dialogs/${props.id}`;
  return (
    <NavLink to={link} className={classes.dialog__item}>
      {props.name}
    </NavLink>
  )
}

export default DialogItem;