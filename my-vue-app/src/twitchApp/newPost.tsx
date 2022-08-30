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
      {content.map(({ author, message, color, id }) => {
        return (
          <div className="newMsg" key={id}>
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
      {msgToBeSplitted.map((part, index) => {
        if (EMOJI_COLLECTION.has(part)) {
          return <Emoji emojiCall={part} key={index} />;
          //return <Emoji emojiCall={EMOJI_COLLECTION} />;
        } else {
          return <span key={index}>{part}</span>;
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
