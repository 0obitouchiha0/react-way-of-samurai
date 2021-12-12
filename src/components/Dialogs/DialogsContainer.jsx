import {storeContext} from '../../storeContext';
import {addLetterMessageActionCreator, addMessageActionCreator} from '../redux/dialogReducer'; 
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialog: state.dialog,
    value: state.dialog.currentValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addLetter: (messageText) => {
      dispatch(addLetterMessageActionCreator(messageText));
    },
    addMessage: (messageText) => {
      dispatch(addMessageActionCreator(messageText));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainer = () => {
//   return (
//     <storeContext.Consumer> 
//       {
//         store => {
//           const addNewMessage = (messageText) => {
//             store.dispatch(addMessageActionCreator(messageText));
//           }
        
//           const addLetter = (messageText) => {
//             store.dispatch(addLetterMessageActionCreator(messageText));
//           }
        
//           return (
//             <Dialogs
//               addLetter={addLetter} 
//               addNewMessage={addNewMessage}
//               state={store.getState()}
//               value={store.getState().dialog.currentValue}
//             />
//           )
//         }
//       }
//     </storeContext.Consumer>
//   )
  // const addNewMessage = (messageText) => {
  //   props.dispatch(addMessageActionCreator(messageText));
  // }

  // const addLetter = (messageText) => {
  //   props.dispatch(addLetterMessageActionCreator(messageText));
  // }

  // return (
  //   <Dialogs
  //     addLetter={addLetter} 
  //     addNewMessage={addNewMessage}
  //     state={props.state}
  //     value={props.value}
  //   />
  // )
// }

