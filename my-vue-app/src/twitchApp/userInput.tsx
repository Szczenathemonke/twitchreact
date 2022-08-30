import { useState, useEffect, useRef } from "react";

const SendMsg = () => {
  const [userInput, setUserInput] = useState("");
  const wsRef = useRef<any | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://niezniszczalny-chinczyk.com/twitch-chat");

    wsRef.current = ws;

    return () => {
      if (ws.readyState === ws.OPEN) {
        ws.close();
      }
    };
  }, []);

  return (
    <form
      className="chatFrame"
      onSubmit={(e) => {
        e.preventDefault();
        wsRef.current.send(JSON.stringify({ message: userInput }));
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
