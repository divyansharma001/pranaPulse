

const Front = () => {
  return (
    <>
      <div className="mb-10 text-white max-w-[1320px] mx-auto  md:grid grid-cols-2  md:my-10  my-7  overflow-x-hidden ">
        <div className="col-span-1 text-center md:text-start">
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10  ">
            <h1>Anytime, Any</h1>
            <h1>Place, Any</h1>
            <h1>Asanas</h1>
          </div>
          <div className="md:text-xl">
            <h1>
              Take your routine at any time of your day, with the power of yoga
              and with the AI who will guide you.
            </h1>
          </div>
        </div>
        <div className="md:ml-60 col-span-1 ml-20">
          <img src="img1.png" className="md:w-[350px] w-60 z-0"></img>
        </div>
      </div>



      
     {/* Ai image */}
     <div className="w-full bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] md:my-20 ">

     
      <div className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] md:mx-16 text-black max-w-[1320px] mx-auto  md:grid grid-cols-2   my-6  overflow-x-hidden ">
      <div className="md:ml-0 col-span-1 ml-20 mt-11 hidden md:block pb-6 md:my-16">
          <img src="" className="md:w-[350px] w-60 z-0" alt="ai image"></img>
        </div>
       
        <div className="col-span-1 text-center md:text-start ">
        <h1 className="text-2xl font-semibold m-auto md:my-7 my-6">
              How it <span className="text-[#0884AB]">Works?  </span> 
            </h1>
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10 ">
            <h1><span  className="text-[#0884AB]">Chat</span> With</h1>
            <h1><span className="text-[#0884AB]">Prana</span></h1> 
          </div>
          <div className="md:text-2xl  md:my-24 font-semibold my-7">
            <h1 >
              Talk to our <span className="text-[#0884AB]">AI</span> and get personalised response about your problems and solutions in <span className="text-[#0884AB]">yoga</span> . 
            </h1>
          </div>
        </div>
       
      </div>  
      </div>


      {/* Working */}

      <div className=" text-white max-w-[1320px] mx-auto  md:grid grid-cols-2  md:my-40 my-7  overflow-x-hidden ">
     
       
        <div className="col-span-1 text-center md:text-start pt-5 py-24">
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10 ">
            <h1>Your AI  </h1>
            <h1>Yoga Teacher!</h1>
          </div>
          <div className="md:text-xl">
            <h1>
              Our AI yoga teacher will help practice and master yoga postion to lead that healthy life. 
            </h1>
          </div>
        </div>
        <div className="md:ml-0 col-span-1 ml-20 mt-11 hidden md:block pb-6 md:my-16">
          <img src="" className="md:w-[450px] w-60  ml-44 mt-[-80px] z-0" alt="ai image"></img>
        </div>
       
      </div>  


    </>
  );
};

export default Front;
