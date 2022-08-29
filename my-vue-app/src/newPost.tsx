import { useEffect, useState } from "react";
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
  const [userColors, setUserColors] = useState<object>({});
  //const userColorStyle = ` var(--userColor${userColors.authorProps})`;
  const [userColorCounter, setUserColorCounter] = useState<number>(0);
  //const [userColorStyle, setColorStyle] = useState<string>(` var(--userColor${userColorCounter})`)

  useEffect(() => {
    if (!userColors.hasOwnProperty(authorProps)) {
      setUserColors((oldstate) => {
        return {
          ...oldstate,
          authorProps: ` var(--userColor${userColorCounter})`,
        };
      });
      setUserColorCounter((old) => old + 1);
    }
  }, [authorProps, userColorCounter, userColors]);
  // if (!userColors.hasOwnProperty(authorProps)) {

  //   setUserColors((oldstate) => {
  //     return {
  //       ...oldstate,
  //       authorProps: ` var(--userColor${userColorCounter})`,
  //     };
  //   });
  //   setUserColorCounter((old) => old + 1);
  // }

  // if (!userColors.some((e) => e === authorProps)) {
  //   //setUserColors(userColors.push(authorProps));
  //   //setUserColorCounter(userColorCounter + 1);
  // }
  // useEffect(() => {
  //   if (!userColors.hasOwnProperty(authorProps)) {
  //     setUserColors(, userColors.authorProps = userColorCounter);
  //     setUserColorCounter((old) => old + 1);
  //   }
  // }, [authorProps, userColorCounter, userColors]);

  if (userColorCounter > 5) {
    setUserColorCounter(0);
  }
  console.log(userColors);
  return <span style={{ color: userColors.authorProps }}>{authorProps}</span>;
};

export default NewPost;
