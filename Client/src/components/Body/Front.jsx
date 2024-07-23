import React from "react";

const Front = () => {
  return (
    <>
      <div className="text-white max-w-[1320px] mx-auto  md:grid grid-cols-2  md:my-10  my-7  overflow-x-hidden overflow-y-hidden">
        <div className="col-span-1 text-center md:text-start">
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10 ">
            <h1>Anytime, Any</h1>
            <h1>Place, Any</h1>
            <h1>Asanas</h1>
          </div>
          <div className="md:text-xl">
            <h1>
              Take your routine at any time of your day, with the power of yoga and
              with the AI who will guide you.
            </h1>
          </div>
        </div>
        <div className="md:ml-60 col-span-1 ml-20">
          <img src="img1.png" className="md:w-[350px] w-60 z-0"></img>
        </div>
      </div>
      




      <div className="p-4 mb-2 md:p-8 bg-gray-100 ">
        <div className="flex justify-center items-center h-screen mt-56">
          <div className="w-full max-w-xxl p-4 mb-96 border-2 border-[#0584AB] bg-[#0584AB] mt-20 rounded-lg">
            <h1 className="text-5xl font-bold text-center mb-6 mt-10 text-white">Ask Prana</h1>
            <h2 className="text-xl sm:text4xl font-lighter text-center mb-6 mt-10 text-white">Share Your Health Challenges and Concerns, and Let Our AI Guide You to Tailored Yoga Solutions That Perfectly Fit Your Needs</h2>
            <div className="relative">
              <textarea
                className="w-full sm:h-56 p-3 border-2 border-[#0584AB] mb-20 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                rows="5"
                placeholder="Message Prana..."
              ></textarea>
              <div className="flex flex-wrap justify-center gap-4 p-4">
                <button className="flex items-center gap-2 bg-white sm:mb-12 text-[#0584AB] py-2 px-4 rounded-lg border border-[#0584AB] hover:bg-[#f0f9ff] focus:outline-none text-sm md:text-base">
                  <span className="material-icons">star</span>Fat
                </button>
                <button className="flex items-center gap-2 sm:mb-12 bg-white text-[#0584AB] py-2 px-4 rounded-lg border border-[#0584AB] hover:bg-[#f0f9ff] focus:outline-none text-sm md:text-base">
                  <span className="material-icons">star</span> Breathing Issue
                </button>
                <button className="flex items-center gap-2 mb-12 bg-white text-[#0584AB] py-2 px-4 rounded-lg border border-[#0584AB] hover:bg-[#f0f9ff] focus:outline-none text-sm md:text-base">
                  <span className="material-icons"></span> High Cholesterol
                </button>
              </div>

              <button
                className="absolute right-2 bottom-2 border-2 border-white bg-[#0584AB] text-white py-1 px-4 mb-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>



      </div>
      <div className="p-4 md:p-8 bg-gray-100 mt-[-200px]">
  <h2 className="text-center text-2xl md:text-4xl font-bold mb-5">Explore daily Yog and Asanas</h2>
  <div className="relative">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/side-view-elder-couple-practicing-yoga-outdoors_23-2148729854.jpg?t=st=1721670903~exp=1721674503~hmac=2a8252c5953daea29b270a2434b34dab9ce2762defb0124a4de8c5647a8007c4&w=996"
          alt="Yoga Pose 1"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/elder-couple-practicing-yoga-outdoors_23-2148729830.jpg?t=st=1721670927~exp=1721674527~hmac=ce3d92101c22dec700dff18fa68c7546384559f28fa83dcaf3efb49863fcbb2a&w=996"
          alt="Yoga Pose 2"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/front-view-older-couple-doing-yoga-outdoors_23-2148729842.jpg?t=st=1721670842~exp=1721674442~hmac=b0a36dacc203513ad632ecfc6d49009683dcca8dfe3ecd5cde604041fdcee368&w=996"
          alt="Yoga Pose 3"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/elder-couple-doing-yoga-outside_23-2148729829.jpg?t=st=1721670959~exp=1721674559~hmac=ed97c8da52bb15d5ff612e2c9175c24f9201b1a6f5072dd730d925d4861c3a88&w=996"
          alt="Yoga Pose 4"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/older-couple-doing-yoga-outdoors_23-2148729834.jpg?t=st=1721671026~exp=1721674626~hmac=1d939a9e04a93cd9c9b6eba45c4b46d091927c43c6bc24688c32245d586a4693&w=996"
          alt="Yoga Pose 3"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/side-view-elder-couple-doing-yoga-outdoors_23-2148729827.jpg?t=st=1721670991~exp=1721674591~hmac=2326ee279ebe2b11257e93126add1d9a83471c0fb27eca232bbe87886796ba9e&w=996"
          alt="Yoga Pose 4"
          className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Yogas</div>
      </div>
    </div>
  </div>
</div>














    </>

  );
};

export default Front;
