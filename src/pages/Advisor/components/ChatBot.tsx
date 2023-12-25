import {useState, useEffect} from 'react';
import {Input, message,Space,Button,Select} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {useIntl} from "@umijs/max";
import ChatBox from "@/pages/Advisor/components/ChatBox";
const { Search } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];


//TODO: FINISH THIS PART
const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'dodo',
      text: 'Hello, I am Dodo, your advisor. How can I help you?',
      date: '2021-10-10',
    },
    {
      sender: 'dodo',
      text: 'Hello, Are you there?',
      date: '2021-10-10',
    },
    {
      sender: 'webrainer',
      text: 'Yes, I am here.',
      date: '2021-10-10',
    }
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
          <ChatBox message={message}/>
        </div>)
      )}

      <br/>
      {/* Input */}
      <Space direction="vertical" size="middle">



        <Space.Compact style={{ width: '100%' }}>
          <Input defaultValue="Combine input and button" />
          <Button type="primary">Submit</Button>
        </Space.Compact>

        <Space.Compact size="large">
          <Input addonBefore={<SearchOutlined />} placeholder="large size" />
          <Input placeholder="another input" />
        </Space.Compact>
      </Space>
    </div>
  );
}

export default ChatBot;
