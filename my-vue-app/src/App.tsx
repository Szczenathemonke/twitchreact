import { useState } from "react";
import "./App.css";
import emojiCollection from "./emojis";
import emoji from "./emoji";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <emoji emojiCall={emojiCollection} />
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

export default App;
