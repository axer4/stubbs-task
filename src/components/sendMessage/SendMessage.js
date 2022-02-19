import { useState } from "react"
import { useDispatch } from "react-redux"
import {addMessage} from '../../redux/chatReducer'
import s from './SendMessage.module.css'
import icon from '../../icons/send.png'
function SendMessage () {
    const [message,setMessage] = useState('')
    const dispatch = useDispatch();
    const onChangeInputHandler =(e)=> {
       setMessage(e.target.value)
    }
    const sendMsg = (e) => {
        e.preventDefault();
       dispatch(addMessage(message))
       setMessage('')
    }
    return <div className={s.wide}>
        <form type="submit" onSubmit={sendMsg} className={s.form}>
        <input type='text' placeholder="Введите сообщение" onChange={onChangeInputHandler} className={s.input} value={message}/>
        <button className={s.btn}><img src={icon} alt='Отправить'/></button>
        </form>
    </div>
}
export default SendMessage;