import { useState, useEffect } from "react";
import "./App.css";
import emojiCollection from "./emojis";
import Emoji from "./emoji";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <Emoji src={emojiCollection["Kappa"]} />
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
  Author: string;
  Message: string;
};

const newMessage = ({ Author, Message }: ServerMessageType) => {
  return (
    <span>
      <span className="Author" key={Author}>
        {Author}
      </span>
      <span className="Message" key={Message}>
        {Message}
      </span>
    </span>
  );
};

const webSocket = new WebSocket(
  "wss://niezniszczalny-chinczyk.com/twitch-chat"
);
const WebSocketSource = () => {
  useEffect(() => {
    webSocket.onmessage = (serverEvent) => newMessage(serverEvent);

    const serverMsgData = JSON.parse(serverEvent.data);
  }, []);
};

export default App;
