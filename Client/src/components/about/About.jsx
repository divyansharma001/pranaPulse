import { motion } from "framer-motion"

const About = () => {
  return (
       <>
       About
       

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

  )
}

export default About