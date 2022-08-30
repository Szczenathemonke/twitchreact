import { useState, useEffect } from "react";
import NewPost from "./newPost";

export type ServerMsg = {
  author: string;
  message: string;
  color: string | void;
};

const WebSocketSource = () => {
  const [serverMessageContainer, setContaninerContent] = useState<ServerMsg[]>(
    []
  );
  const [userColors, setUserColors] = useState<string[]>([]);

  useEffect(() => {
    const webSocket = new WebSocket(
      "wss://niezniszczalny-chinczyk.com/twitch-chat"
    );
    webSocket.onmessage = (serverEvent) => {
      const serverMessage = JSON.parse(serverEvent.data);

      if (!userColors.some((e) => e === serverMessage.author)) {
        setUserColors((oldstate) => {
          return [...oldstate, serverMessage.author];
        });
      }

      if (userColors.indexOf(serverMessage.author) < 6) {
        serverMessage.color = ` var(--userColor${userColors.indexOf(
          serverMessage.author
        )})`;
      } else {
        serverMessage.color = ` var(--userColor${
          userColors.indexOf(serverMessage.author) % 6
        })`;
      }
      setContaninerContent((serverMessageContainer) => [
        ...serverMessageContainer,
        serverMessage,
      ]);
    };

    return () => {
      webSocket.close();
    };
  }, [serverMessageContainer, userColors]);

  if (serverMessageContainer.length > 50) {
    serverMessageContainer.splice(0, 2);
  }
  return <NewPost content={serverMessageContainer} />;
};

export default WebSocketSource;
