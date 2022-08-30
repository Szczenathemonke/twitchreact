import EMOJI_COLLECTION from "./emojis";

type EmojiProps = {
  emojiCall: string;
};
const Emoji = ({ emojiCall }: EmojiProps) => {
  return (
    <span>
      <img src={EMOJI_COLLECTION[emojiCall]} alt="emojiNotFound" />
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
