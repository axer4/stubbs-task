import ChatArea from "./components/chat/ChatArea.js";
import SendMessage from "./components/sendMessage/SendMessage.js";
import s from './App.module.css'
function App() {
  return (
    <div className={s.App}>
      <ChatArea/>
  <SendMessage/>
    </div>
  );
}

export default App;
