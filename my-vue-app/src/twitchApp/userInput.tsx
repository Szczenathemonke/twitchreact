import { useState, useEffect } from "react";
// import { ServerMsg } from "./socket";

const SendMsg = () => {
  const [userInput, setUserInput] = useState("");
  const [newMsgToBeSend, setMsgToBeSend] = useState("");

  //   const newUserMsg: object = {
  //     author: "szczenathemonke",
  //     message: `${newMsgToBeSend}`,
  //   };
  //   const webSocket = new WebSocket(
  //     "wss://niezniszczalny-chinczyk.com/twitch-chat"
  //   );

  //   const newUserMsg: object = {
  //     author: "szczenathemonke",
  //     message: `${newMsgToBeSend}`,
  //   };

  //   if (webSocket.readyState === WebSocket.OPEN) {
  //     webSocket.send(JSON.stringify(newUserMsg));
  //     //   webSocket.onopen((event) => {
  //     //     webSocket.send(JSON.stringify(newUserMsg));
  //     //   });
  //   }

  useEffect(() => {
    const ws = new WebSocket("wss://niezniszczalny-chinczyk.com/twitch-chat");
    const newUserMsg: object = {
      author: "szczenathemonke",
      message: `${newMsgToBeSend}`,
    };
    // if (webSocket.readyState === WebSocket.OPEN) {
    //   webSocket.onopen((event) => {
    //     webSocket.send(JSON.stringify(newUserMsg));
    //   });
    // }
    //webSocket.readyState === WebSocket.OPEN

    if (ws.readyState === 1) {
      return ws.send(JSON.stringify(newUserMsg));
      // ws.close()
    }

    console.log(newMsgToBeSend);
    return () => {
      //   if (ws.readyState === 1) {
      //     ws.send(JSON.stringify(newUserMsg));
      //     console.log("test");
      //   }
      ws.close();
    };
  }, [newMsgToBeSend]);

  return (
    <form
      className="chatFrame"
      onSubmit={(e) => {
        e.preventDefault();
        setMsgToBeSend(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">SEND</button>
    </form>
  );
};
export default SendMsg;
