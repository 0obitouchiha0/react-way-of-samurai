import classes from './../Dialogs.module.css';


const Message = props => {
  let styleMessage = props.id % 2 == 0 ? classes.dialog__message : classes.dialog__message + ' ' + classes.dialog__message__right;
  return (
    <div className={styleMessage}>
      <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="" />
      <p>{props.text}</p>
    </div>
  )
}

export default Message;