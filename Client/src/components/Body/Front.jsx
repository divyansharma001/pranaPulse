import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const Front = () => {
  return (
    <>
      <div id="home" className="mb-10 text-white max-w-[1320px] mx-auto  md:grid grid-cols-2  md:my-10  my-7   ">
        <motion.div
          className="col-span-1 text-center md:text-start"
          variants={fadeInUpAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10  ">
            <motion.h1 variants={fadeInUpAnimation}>Anytime, Any</motion.h1>
            <motion.h1 variants={fadeInUpAnimation}>Place, Any</motion.h1>
            <motion.h1 variants={fadeInUpAnimation}>Asanas</motion.h1>
          </div>

          <motion.h1
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="md:text-xl"
          >
            Take your routine at any time of your day, with the power of yoga
            and with the AI who will guide you.
          </motion.h1>
        </motion.div>

        <div className="md:ml-52 col-span-1 ml-20 mt-3 ">
          <motion.img
            src="img1.png"
            className="md:w-[350px] w-60 z-0 "
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          ></motion.img>
        </div>
      </div>

      {/* Ai image */}
      <div className="w-full bg-[#E0E6F9] md:my-20 ">
        <div className="bg-[#E0E6F9] md:mx-16 text-black max-w-[1320px] mx-auto  md:grid grid-cols-2   my-6  overflow-x-hidden ">
          <div className="md:ml-0 col-span-1 ml-20 mt-11 hidden md:block pb-6 md:my-16">
            <img
              src="img2.jpg"
              className="  md:w-[500px] w-60 z-0"
              alt="ai image"
            ></img>
          </div>

          <div className="col-span-1 text-center md:text-start ">
            <h1 className="text-2xl font-semibold m-auto md:my-7 my-6">
              How it <span className="text-[#0884AB]">Works? </span>
            </h1>
            <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10 ">
              <h1>
                <span className="text-[#0884AB]">Chat</span> With
              </h1>
              <h1>
                <span className="text-[#0884AB]">AI</span>
              </h1>
            </div>
            <div className="md:text-2xl  md:my-24 font-semibold my-7">
              <h1>
                Talk to our <span className="text-[#0884AB]">AI</span> and get
                personalised response about your problems and solutions in{" "}
                <span className="text-[#0884AB]">yoga</span> .
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Working */}

      <div className=" text-white max-w-[1320px] mx-auto  md:grid grid-cols-2  md:my-40 my-7  overflow-x-hidden ">
        <div className="col-span-1 text-center md:text-start pt-5 py-24">
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold  md:pt-10 ">
            <h1>Your AI </h1>
            <h1>Yoga Teacher!</h1>
          </div>
          <div className="md:text-xl">
            <h1>
              Our AI yoga teacher will help practice and master yoga postion to
              lead that healthy life.
            </h1>
          </div>
        </div>
        <div className="md:ml-0 col-span-1 ml-20 mt-11 hidden md:block pb-6 md:my-16">
          <img
            src="img3.jpg"
            className="md:w-full w-60   mt-[-80px] z-0"
            alt="ai image"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Front;
