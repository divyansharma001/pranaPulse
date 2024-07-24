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
        <h1 className="text-5xl font-bold text-center mb-6 text-white">
          Ask Prana
        </h1>
        <div className="relative">
          <textarea
            className="w-full p-3 border-2 border-[#0584AB] sm:h-72 mb-20 rounded-lg resize-none focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Message Prana..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div class="container max-w-md mx-auto p-4">
  <h1 class="text-4xl text-white font-semibold mb-4 sm:ml-20 sm:text-4xl">Health Overview</h1>
  <div class="flex flex-wrap justify-center md:flex-nowrap sm:gap-24">
    <div class="card w-full md:w-1/2 xl:w-1/2 p-4 mb-4 mx-2 md:mx-4">
      <h2 class="sm:text-2xl text-xl text-white font-semibold mb-2  sm:w-56 sm:font-medium sm:mb-5">How would you describe your current stress levels?</h2>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Anxious</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Frazzeled </button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Frustrated</button>

    </div>
    <div class="card w-full md:w-1/2 xl:w-1/2 p-4 mb-4 mx-2 md:mx-4">
      <h2 class="sm:text-2xl text-xl text-white font-semibold mb-2 sm:w-56 sm:font-medium sm:mb-5">How would you rate your flexibility and range of motion?</h2>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Stiffness</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Tightness</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none"> Limited</button>

    </div>
    <div class="card w-full md:w-1/2 xl:w-1/2 p-4 mb-4 mx-2 md:mx-4">
      <h2 class="sm:text-2xl text-xl text-white font-semibold sm:w-56 sm:font-medium sm:mb-5">Have you been experiencing any issues with sleep quality?</h2>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none"> Insomnia</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none"> Restless </button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Fatigue</button>

    </div>
    <div class="card w-full md:w-1/2 xl:w-1/2 p-4 mb-4 mx-2 md:mx-4">
      <h2 class="sm:text-2xl text-xl text-white font-semibold sm:w-56 sm:font-medium sm:mb-5">How would you describe your current energy levels?</h2>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Sluggish</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Drained</button>
      <button class="border-2 border-white bg-white hover:scale-110 duration-500 text-black font-semibold py-1 px-2 mr-4 mb-2 rounded-3xl focus:outline-none">Exhausted</button>
    </div>
  </div>
</div>



          
          <button
            className="absolute right-2 sm:bottom-2 bottom-[944px] border-2 border-white bg-[#0584AB] text-white py-1 px-4 mb-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
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
