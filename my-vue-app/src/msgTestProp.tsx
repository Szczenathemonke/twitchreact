/* 
<ChatBox >
    <MsgList>
        <SingleMsg>
            <Author className="color" />
            <Message>
                <MessageSpliter />
            </Message>
        </SingleMsg>
        <SingleMsg>
            <Author className="color" />
            <Message>
                <MessageSpliter />
            </Message>
        </SingleMsg>
        <SingleMsg>
            <Author className="color" />
            <Message>
                <MessageSpliter />
            </Message>
        </SingleMsg>                    
    </MsgList>
</ChatBox> 
*/
const App = () => {
  return (
    <>
      <ChatBox />
    </>
  );
};

const ChatBox = () => {
  return (
    <div className="container">
      <div className="chatBox">
        <div className="chatWindow" id="chatWindowMain">
          <MsgList />
        </div>
        <form className="chatFrame" id="chatFrame">
          <input type="text" id="msgInput" value="" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

const MsgList = () => {
  return (
    <div>
      <SingleMsg />
    </div>
  );
};
const SingleMsg = () => {
  return (
    <>
      <Author />
      <Message />
    </>
  );
};

const Author = () => {
  return <span className="color"></span>;
};
const Message = () => {
  // split for each of splitted return span/img
  return <span></span>;
};

export default App;
