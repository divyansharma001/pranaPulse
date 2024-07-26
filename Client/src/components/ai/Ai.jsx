import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Loader from "../constants/Loader";

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
    <div className="flex justify-center h-screen">
      <div className="w-full p-4 bg-[#0584AB] rounded-lg">
        <h1 className="text-5xl font-bold text-center mb-6 text-white">
          Ask Prana
        </h1>
        <div className="relative">
          <textarea
            className="w-full p-3 border-2 border-[#0584AB] mb-20 rounded-lg resize-none focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Message Prana..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onClick={handleKeyPress}
            disabled={isLoading}
          ></textarea>

          <button
            className="absolute right-2 bottom-2 border-2 border-white bg-[#0584AB] text-white py-1 px-4 mb-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {isLoading ? (
          <Loader />
        ) : messages.length > 0 ? (
          <div className="mt-10 w-full p-3 border-2 border-[#0584AB] rounded-lg bg-white">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Ai;
