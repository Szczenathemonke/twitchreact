import { useState, useEffect } from "react";
import "./App.css";
import EMOJI_COLLECTION from "./emojis";
import Emoji from "./emoji";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <Emoji emojiCall={EMOJI_COLLECTION} />
        </div>
        <form className="chatFrame" id="chatFrame">
          <input type="text" id="msgInput" value="" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

type ServerMessageType = {
  serverMessage: object;
};

// const newMessage = ({ serverMessage }: ServerMessageType) => {
//   return (
//     <span>
//       <span className="Author" key={serverMessage.author}>
//       {serverMessage.author}
//       </span>
//       <span className="Message" key={serverMessage.message}>
//       {serverMessage.message}
//       </span>
//     </span>
//   );
// };

const WebSocketSource = ({ serverMessage }) => {
  useEffect(() => {
    const [serverEvent, setServerEvent] = useState("");
    const webSocket = new WebSocket(
      "wss://niezniszczalny-chinczyk.com/twitch-chat"
    );
    webSocket.onmessage = (serverEvent) =>
      setServerEvent(JSON.parse(serverEvent.data));
    // const serverMessage = JSON.parse(serverEvent.data: Object);

    return () => {
      webSocket.close();
    };
  }, []);

  return (
    <span>
      <span className="Author" key={serverMessage.author}>
        {serverMessage.author}
      </span>
      <span className="Message" key={serverMessage.message}>
        {serverMessage.message}
      </span>
    </span>
  );
};

export default App;
