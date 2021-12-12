import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';


const Dialogs = (props) => {
  let dialogsData = props.dialog.dialogsData;
  let messagesData = props.dialog.messagesData;

  let dialogsElements = dialogsData.map((item) => {
    return <DialogItem name={item.name} id={item.id} />
  });

  let messagesElements = messagesData.map((item) => {
    return <Message text={item.text} id={item.id}/>
  })

  let messageText = React.createRef();
  const addMessage = () => {
    props.addMessage(messageText);
  }

  let change = () => {
    props.addLetter(messageText);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__list}>
        {dialogsElements}
      </div>
      <div className={classes.dialog}>
        {messagesElements}
        <div className="addMessage">
          <textarea ref={messageText} onChange={change} value={props.value}></textarea>
          <button onClick={addMessage}>send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;