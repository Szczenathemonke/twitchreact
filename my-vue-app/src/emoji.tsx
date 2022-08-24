import EMOJI_COLLECTION from "./emojis";

type EmojiPropTypes = {
  emojiCall: typeof EMOJI_COLLECTION;
};

const Emoji = ({ emojiCall }: EmojiPropTypes) => {
  return (
    <span>
      <img src={emojiCall.KEKW} alt="emojiNotFound" />
    </span>
  );
};

export default Emoji;
