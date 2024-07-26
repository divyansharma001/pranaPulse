import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const MessageList = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 18px;
  max-width: 70%;
  ${props => props.isUser ? `
    background-color: #007bff;
    color: white;
    align-self: flex-end;
    margin-left: auto;
  ` : `
    background-color: #f1f0f0;
    align-self: flex-start;
  `}

  p {
    margin: 0 0 10px 0;
  }

  ul, ol {
    margin: 0 0 10px 0;
    padding-left: 20px;
  }

  strong {
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function YogaChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '' || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/user/chat`, { 
        userInput: input, 
        conversationHistory: newMessages 
      });
      
      // Format the response to use Markdown syntax
      const formattedResponse = response.data.response
        .replace(/\*\*/g, '**')  // Ensure ** is used for bold
        .replace(/^-/gm, '- ')   // Ensure proper spacing for bullet points
        .replace(/\n/g, '\n\n'); // Add extra line breaks for paragraphs

      setMessages([
        ...newMessages, 
        { role: 'assistant', content: formattedResponse }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <ChatContainer>
      <h1>Yoga Assistant</h1>
      <MessageList>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.role === 'user'}>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </MessageList>
      <InputContainer>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <Button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </InputContainer>
    </ChatContainer>
  );
}

export default YogaChatbot;