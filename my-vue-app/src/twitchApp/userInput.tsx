import { useState, useEffect, useRef } from "react";
// import { ServerMsg } from "./socket";

const SendMsg = () => {
  const [userInput, setUserInput] = useState("");
  const [newMsgToBeSend, setMsgToBeSend] = useState("");
  const wsRef = useRef<any | null>(null);

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
    // if (ws.readyState === WebSocket.OPEN) {
    //   ws.onopen((event) => {
    //     ws.send(JSON.stringify(newUserMsg));
    //   });
    // }

    // if (ws.readyState === 1) {
    //    ws.send(JSON.stringify(newUserMsg));
    // }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify(newUserMsg));
    };

    return () => {
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
