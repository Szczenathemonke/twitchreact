import { useState, useEffect, useRef } from "react";
import NewPost from "./newPost";

export type ServerMsg = {
  author: string;
  message: string;
  color: string;
  id: number;
};

const WebSocketSource = () => {
  const [serverMessageContainer, setContaninerContent] = useState<ServerMsg[]>(
    []
  );
  const userColors = useRef<string[]>([]);
  const msgId = useRef(1);

  useEffect(() => {
    const webSocket = new WebSocket(
      "wss://niezniszczalny-chinczyk.com/twitch-chat"
    );
    webSocket.onmessage = (serverEvent) => {
      const serverMessage = JSON.parse(serverEvent.data);

      if (!userColors.current.some((e) => e === serverMessage.author)) {
        userColors.current.push(serverMessage.author);
      }

      serverMessage.color = ` var(--userColor${
        userColors.current.indexOf(serverMessage.author) % 6
      })`;
      serverMessage.id = msgId.current;
      msgId.current += 1;
      setContaninerContent((serverMessageContainer) => [
        ...serverMessageContainer,
        serverMessage,
      ]);
    };

    return () => {
      webSocket.close();
    };
  }, []);

  if (serverMessageContainer.length > 50) {
    serverMessageContainer.splice(0, 2);
  }
  return <NewPost content={serverMessageContainer} />;
};

export default WebSocketSource;
