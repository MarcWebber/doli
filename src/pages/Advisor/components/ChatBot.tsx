import {useState, useEffect} from 'react';
import {Button, Input, message} from 'antd';
import {useIntl} from "@umijs/max";

type Message = {
  sender: string;
  text: string;
  data?: any;
}

//TODO: FINISH THIS PART
const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'dodo',
      text: 'hello',
    },
  ]);
  const [input, setInput] = useState('');
  const [isChatBotOn, setIsChatBotOn] = useState(false);
  const intl= useIntl();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleSendMessage = () => {
    const newMessages = [...messages];
    setMessages(newMessages);
    setInput('');
  }

  const handleChatBotOn = () => {
    setIsChatBotOn(true);
  }

  useEffect(() => {
    if (isChatBotOn) {
      message.info('Chat bot is on');
    } else {
      message.info('Chat bot is off');
    }
  }, [isChatBotOn]);


  return (
    <div>
      {/* Display messages */}
      {messages.map((message, index) => (
        <div key={index}>
          <span>{message.sender}: </span>
          <span>{message.text}</span>
        </div>)
      )}

      {/* Input */}
      <Input placeholder="Type a message..." value={input} onChange={handleInputChange}/>
      {/* Send button */}
      <Button type="primary" key="primary" onClick={handleSendMessage}>
        {intl.formatMessage({id: 'pages.advisor.send'})}
      </Button>
      {/* Chat bot on/off button */}
      <Button type="primary" key="primary" onClick={handleChatBotOn}></Button>
    </div>
  );
}

export default ChatBot;
