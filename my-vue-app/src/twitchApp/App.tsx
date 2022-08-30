import "../App.css";
import WebSocketSource from "./socket";
import SendMsg from "./userInput";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <WebSocketSource />
        </div>
        <SendMsg />
      </div>
    </div>
  );
};

export default App;
