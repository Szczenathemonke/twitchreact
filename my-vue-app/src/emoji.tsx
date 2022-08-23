import emojiCollection from "./emojis";
const Emoji = ({ emojiName }: string) => {
  if (emojiCollection.emojiName) {
  }

  return <img src={emojiCollection.emojiName} alt="emojiNotFound" />;
};

export default Emoji;
