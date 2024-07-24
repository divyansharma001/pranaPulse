import { useState } from "react";
import Loader from "../constants/Loader";

const Ai = () => {
  const [answer, setAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [height, setHeight] = useState('160vh');

  const heightSubmit = (event) => {
    event.stopPropagation(); 
    setHeight('243vh');
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setAnswer(true);
    }, 2000);
  };

  return (
    <div className="flex justify-center h-auto" style={{ height: height }} onClick={(event) => {
      if (event.target.tagName === 'BUTTON' && event.target.type === 'submit') {
        heightSubmit(event);
      }
    }}>
      <div className="w-full p-4 bg-[#0584AB] rounded-lg">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#E0E6F9]">
          Ask Prana
        </h1>
        <div className="relative">
          <textarea
            className="w-full p-3 border-2 border-[#0584AB] sm:h-72 mb-20 rounded-lg resize-none focus:outline-none focus:border-blue-500 bg-[#E0E6F9]"
            rows="5"
            placeholder="Message Prana..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
 



          
          <button
            className="absolute right-2 sm:bottom-2 bottom-[944px] border-2  bg-[#E0E6F9] text-black py-1 px-4 mb-2 rounded-lg  "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {/* Conditional rendering for Loader and Answer */}
        {loading ? (
          <Loader />
        ) : answer ? (
          <div className="mt-10 w-full h-1/3 p-3 border-2 border-[#0584AB] rounded-lg bg-[#E0E6F9]">
            This is the answer to your question.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Ai;
