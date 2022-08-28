// import { useState, useEffect } from "react";
import "./App.css";
import EMOJI_COLLECTION from "./emojis";
import Emoji from "./emoji";
import WebSocketSource from "./socket";

const App = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <Emoji emojiCall={EMOJI_COLLECTION} />
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
