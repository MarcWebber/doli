import {useState, useEffect} from 'react';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatBotOn, setIsChatBotOn] = useState(false);

  const handleInputChange = event:any => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div>
      {/* Display messages */}
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' ? 'You: ' : 'Bot: '}
            {message.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <input type="text" value={inputText} onChange={handleInputChange}/>

      {/* Send button */}
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}


