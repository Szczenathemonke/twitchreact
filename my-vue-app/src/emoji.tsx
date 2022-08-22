const emoji = ({ emojiCall }: { emojiCall: string }) => {
  return <img src={`/${emojiCall}`} />;
};

export default emoji;
