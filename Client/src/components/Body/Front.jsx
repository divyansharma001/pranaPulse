const Front = () => {
  return (
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
  );
};

export default Front;
