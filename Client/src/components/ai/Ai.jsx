import { useState } from "react";
import Loader from "../constants/Loader";

const Ai = () => {
  const [answer, setAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setAnswer(true);
    }, 2000);
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="absolute right-2 bottom-2 border-2 border-white bg-[#0584AB] text-white py-1 px-4 mb-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {/* Conditional rendering for Loader and Answer */}
        {loading ? (
          <Loader />
        ) : answer ? (
          <div className="mt-10 w-full h-1/3 p-3 border-2 border-[#0584AB] rounded-lg bg-white">
            This is the answer to your question.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Ai;
