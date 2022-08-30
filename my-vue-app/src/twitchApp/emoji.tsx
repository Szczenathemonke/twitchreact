import EMOJI_COLLECTION from "./emojis";

type EmojiProps = {
  emojiCall: string;
};
const Emoji = ({ emojiCall }: EmojiProps) => {
  const emoji = EMOJI_COLLECTION.get(emojiCall);
  if (emoji === undefined) {
    return null;
  }
  return (
    <span>
      <img src={emoji} alt="emojiNotFound" />
    </span>
  );
};

export default Emoji;

// type EmojiPropTypes = {
//   emojiCall: typeof EMOJI_COLLECTION;
// };

// const Emoji = ({ emojiCall }: EmojiPropTypes) => {
//   return (
//     <span>
//       <img src={emojiCall.KEKW} alt="emojiNotFound" />
//     </span>
//   );
// };

// export default Emoji;
