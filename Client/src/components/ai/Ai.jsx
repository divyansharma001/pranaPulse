import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Loader from "../constants/Loader";
import { motion } from "framer-motion";

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

      setMessages([
        ...newMessages, 
        { role: 'assistant', content: response.data.response }
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
      <div className="flex justify-center h-auto">
        <div className="w-11/12 md:w-9/12 p-4 bg-[#0584AB] rounded-lg flex flex-col h-full max-h-screen">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
            Ask Prana
          </h1>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'}`}>
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {isLoading && (
            <div className="flex justify-center mt-4">
              <Loader />
            </div>
          )}
          <div className="relative flex items-center mt-4">
            <input
              className="flex-grow p-3 border-2 border-[#0584AB] rounded-lg resize-none focus:outline-none focus:border-blue-500"
              placeholder="Message Prana..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="ml-2 border-2 border-white bg-[#0584AB] text-white py-1 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
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
          backgroundColor: "#E0E6F9 ",
          zIndex: 20,
        }}
      ></motion.div>

      
     
    </>
  );
};

export default Ai;
