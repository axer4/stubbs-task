import { connect, useDispatch } from "react-redux";
import s from './ChatArea.module.css'
import {deleteMessage} from '../../redux/chatReducer'
function ChatArea ({messages}) {
    const dispatch = useDispatch();
    return <div className={s.container}>
         <ul className={s.list}>
             {messages.map(el => {
                 return <li key={el.id} className={s.item} onClick={()=>dispatch(deleteMessage(el.id))}>
                     <p className={s.message}>{el.message}</p>
                     </li>
             })}
         </ul>
    </div>
}
const mapStateToProps = state => {
    return {
     messages: state.chatReducers.messages
    };
  };
  
  export default connect(mapStateToProps)(ChatArea);