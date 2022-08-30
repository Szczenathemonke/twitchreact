import { ServerMsg } from "./socket";
import EMOJI_COLLECTION from "./emojis";
import Emoji from "./emoji";
import "../App.css";
type NewPostProps = {
  content: ServerMsg[];
};
const NewPost = ({ content }: NewPostProps) => {
  return (
    <>
      {content.map(({ author, message, color }) => {
        return (
          <div className="newMsg">
            <Author authorProps={author} authorColor={color} />
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

const Author = ({
  authorProps,
  authorColor,
}: {
  authorProps: string;
  authorColor: string | void;
}) => {
  return <span style={{ color: `${authorColor}` }}>{authorProps}: </span>;
};

export default NewPost;
