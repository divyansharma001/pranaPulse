import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div>
      <motion.div className="flex justify-center  h-screen">
        <motion.span
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
        ></motion.span>
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
        ></motion.span>
        <motion.span
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
        ></motion.span>
      </motion.div>
      </div>
  )
}

export default Loader