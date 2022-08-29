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
  const [addColor, setUserColor] = useState<object>({});
  const [userColors, setUserColors] = useState<object>({});
  const [userColorCounter, setUserColorCounter] = useState<number>(0);

  // useEffect(() =>
  //   if (!userColors.hasOwnProperty(content.serverMsg.author)) {
  //     setUserColors((oldstate) => {
  //       return {
  //         ...oldstate,
  //         [author]: ` var(--userColor${userColorCounter})`,
  //       };
  //     });
  //     setUserColorCounter((old) => old + 1);
  //   }
  // }, [content, userColorCounter, userColors]);
  // if (userColorCounter > 5) {
  //   setUserColorCounter(0);
  // }
  useEffect(() => {
    const webSocket = new WebSocket(
      "wss://niezniszczalny-chinczyk.com/twitch-chat"
    );
    webSocket.onmessage = (serverEvent) => {
      const serverMessage = JSON.parse(serverEvent.data);
      if (!userColors.hasOwnProperty(serverMessage.author)) {
        setUserColors((oldstate) => {
          return {
            ...oldstate,
            [serverMessage.author]: ` var(--userColor${userColorCounter})`,
          };
        });
        setUserColorCounter((old) => old + 1);
      }
      //tutaj
      //serverMessage.color = userColors.serverMessage.author
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
