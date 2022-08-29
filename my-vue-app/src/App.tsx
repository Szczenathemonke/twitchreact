import "./App.css";
import WebSocketSource from "./socket";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <WebSocketSource />
        </div>
        <form className="chatFrame" id="chatFrame">
          <input type="text" id="msgInput" value="" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default App;
