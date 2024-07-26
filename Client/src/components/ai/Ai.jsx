import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Loader from "../constants/Loader";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Message = styled.div`
  margin-bottom: 16px;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 70%;
  ${props => props.isUser ? `
    background-color: #E0E6F9;
    color: black;
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

const Ai = () => {
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
    <>
      <div className="flex justify-center h-auto overflow-x-hidden">
        <div className="w-11/12 md:w-9/12 p-4 bg-[#0584AB] rounded-lg flex flex-col h-full max-h-screen">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
            Ask Prana
          </h1>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <Message key={index} isUser={message.role === 'user'}>
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {isLoading && (
            <div className="flex justify-center mt-4">
              <Loader />
            </div>
          )}
          <div className="relative flex md:flex-row flex-col items-center mt-4">
            <input
              className="flex-grow p-3 rounded-lg resize-none focus:outline-none"
              placeholder="What is your problem?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="ml-2 border-2 md:mt-0 mt-3 border-white bg-[#E0E6F9] text-black py-1 px-4 rounded-lg hover:bg-green-50"
              onClick={sendMessage}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#E0E6F9",
          zIndex: 20,
        }}
      ></motion.div>
    </>
  );
};

export default Ai;