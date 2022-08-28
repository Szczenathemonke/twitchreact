import { useState, useEffect } from "react";
import NewPost from "./newPost";

export type ServerMsg = {
  author: string;
  message: string;
};

const WebSocketSource = () => {
  const [serverMessageContainer, setContaninerContent] = useState<ServerMsg[]>(
    []
  );

  useEffect(() => {
    const webSocket = new WebSocket(
      "wss://niezniszczalny-chinczyk.com/twitch-chat"
    );
    webSocket.onmessage = (serverEvent) => {
      const serverMessage = JSON.parse(serverEvent.data);
      setContaninerContent((serverMessageContainer) => [
        ...serverMessageContainer,
        serverMessage,
      ]);
    };

    // const serverMessage = JSON.parse(serverEvent.data: Object);

    return () => {
      webSocket.close();
    };
  }, []);
  if (serverMessageContainer.length > 50) {
    serverMessageContainer.splice(0, 20);
  }
  return (
    <NewPost content={serverMessageContainer} />
    // <>{serverMessageContainer}</>
    // //   return <div>
    // //   <span className="Author">{serverMessage.author}</span>
    // //   <span className="Message">{serverMessage.message}</span>
    // // </div>
  );
};

export default WebSocketSource;
