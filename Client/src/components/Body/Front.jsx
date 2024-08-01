import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const { scrollYProgress: scrollYProgressFirst } = useScroll({
    target: firstRef,
    offset: ["0 1", "1 1"],
  });
  const scaleProgressFirst = useTransform(scrollYProgressFirst, [0, 1], [0.8, 1]);
  const opacityProgressFirst = useTransform(scrollYProgressFirst, [0, 1], [0.6, 1]);

  const { scrollYProgress: scrollYProgressSecond } = useScroll({
    target: secondRef,
    offset: ["0 1", "1 1"],
  });
  const scaleProgressSecond = useTransform(scrollYProgressSecond, [0, 1], [0.8, 1]);
  const opacityProgressSecond = useTransform(scrollYProgressFirst, [0, 1], [0.6, 1]);

  return (
    <>
   <motion.div id="home" className=" mb-10 text-white max-w-[1320px] mx-auto flex flex-col md:flex-row md:my-5 ">
  <motion.div
    className="col-span-1 text-center md:text-start md:order-1 order-2 mt-0 md:mt-10"
    variants={fadeInUpAnimation}
    initial="hidden"
    animate="show"
  >
    <div className="mt-10 md:mt-0 text-4xl md:text-8xl pb-4 md:pb-8 font-semibold md:pt-10">
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

  <div className="col-span-1 flex justify-center items-center mt-8 md:mt-0 md:order-2 order-1">
    <motion.img
      src="img1.png"
      className="md:w-[350px] w-60"
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  </div>
</motion.div>


      {/* Ai image */}
      <motion.div
        ref={firstRef}
        style={{ scale: scaleProgressFirst, opacity: opacityProgressFirst }}
        className="w-full bg-[#E0E6F9] md:my-20 rounded-2xl mt-0 md:mt-10 "
      >
        <div className="bg-[#E0E6F9] rounded-2xl md:mx-16 text-black max-w-[1320px] mx-auto md:grid grid-cols-2 my-6 overflow-x-hidden">
          <div className="col-span-1 flex justify-center items-center  md:flex pb-6 mt-12">
            <motion.img
             animate={{
              y: [0, -50, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
              src="img2.jpg"
              className="md:w-[500px] w-60"
              alt="ai image"
            />
          </div>

          <div className="col-span-1 text-center md:text-start">
            <h1 className="text-2xl font-semibold m-auto md:my-7 my-6">
              How it <span className="text-[#0884AB]">Works?</span>
            </h1>
            <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold md:pt-10">
              <h1>
                <span className="text-[#0884AB]">Chat</span> With
              </h1>
              <h1>
                <span className="text-[#0884AB]">AI</span>
              </h1>
            </div>
            <a href="/ai">
              <div className="border-2 rounded-3xl border-black text-white h-12 w-44 sm:w-auto md:w-56  justify-center font-semibold cursor-pointer sm:ml-2 text-center bg-black text-2xl pt-2 m-auto hover:scale-110 duration-500">Get Started</div>
            </a>
            <div className="md:text-2xl md:my-24 font-semibold my-7">
              <h1>
                Talk to our <span className="text-[#0884AB]">AI</span> and get
                personalised response about your problems and solutions in{" "}
                <span className="text-[#0884AB]">yoga</span>.
              </h1>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Working */}
      <motion.div
        ref={secondRef}
        style={{ scale: scaleProgressSecond, opacity: opacityProgressSecond}}
        className="text-white max-w-[1320px] mx-auto md:grid grid-cols-2 md:my-40 my-7 overflow-x-hidden"
      >
        <div className="col-span-1 text-center md:text-start pt-5 py-24">
          <div className="text-4xl md:text-8xl pb-4 md:pb-8 font-semibold md:pt-10">
            <h1>Your AI </h1>
            <h1>Yoga Teacher!</h1>
          </div>
          <div className="md:text-xl">
            <h1>
              Our AI yoga teacher will help practice and master yoga position to
              lead that healthy life.
            </h1>
          </div>
          <a href="/signin">
              <div className="border-2 rounded-3xl border-black text-white h-12 w-44 sm:w-auto md:w-56 sm:mt-10 mt-12 justify-center font-semibold cursor-pointer sm:ml-5 text-center bg-black text-2xl pt-2 m-auto hover:scale-110 duration-500">Explore</div>
          </a>
        </div>
        <div className="col-span-1 flex justify-center items-center   ">
          <motion.img
            animate={{
              y: [0, -60, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            src="img3.jpg"
            className="md:w-full w-80"
            alt="ai image"
          />
        </div>
      </motion.div>


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

export default Front;

