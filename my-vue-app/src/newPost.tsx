import { useState } from "react";
import { ServerMsg } from "./socket";
import EMOJI_COLLECTION from "./emojis";
import Emoji from "./emoji";
import "./App.css";
type NewPostProps = {
  content: ServerMsg[];
};
const NewPost = ({ content }: NewPostProps) => {
  return (
    <>
      {content.map(({ author, message }) => {
        return (
          <div>
            <Author authorProps={author} />
            <Message msgToSplit={message} />
          </div>
        );
      })}
    </>
  );
};

const Message = ({ msgToSplit }: { msgToSplit: string }) => {
  const regExp = /:/;
  const msgToBeSplitted = msgToSplit.split(regExp);

  return (
    <>
      {msgToBeSplitted.map((part) => {
        if (EMOJI_COLLECTION.hasOwnProperty(part)) {
          return <Emoji emojiCall={part} />;
          //return <Emoji emojiCall={EMOJI_COLLECTION} />;
        } else {
          return <span>{part}</span>;
        }
      })}
    </>
  );
};

const Author = ({ authorProps }: { authorProps: string }) => {
  const [userColors, setUserColors] = useState([]);
  const userColor = ` var(--userColor${userColors.indexOf(authorProps)})`;
  const [userColorCounter, setUserColorCounter] = useState(0);

  if (!userColors.some((e) => e === authorProps)) {
    setUserColors(userColors.push(authorProps));
    //setUserColorCounter(userColorCounter + 1);
  }

  if (userColorCounter > 6) {
    setUserColorCounter(0);
  }
  console.log(userColors);
  return <span style={{ color: userColor }}>{authorProps}</span>;
};

export default NewPost;
