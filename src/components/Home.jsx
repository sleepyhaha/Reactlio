import { easeOut, motion } from "framer-motion";

export default function Home() {
  const animation = {
    initial: {
      opacity: 0,
      y: "10vh",
    },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: {
        staggerChildren: 0.2,
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const childAnimation = {
    initial: {
      opacity: 0,
      y: "10vh",
    },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      className="h-1/2 flex items-baseline"
    >
      <motion.div variants={animation} className=" w-1/3 flex flex-col">
        <motion.h1
          variants={childAnimation}
          className="text-5xl float-left ml-10 mt-5"
        >
          About me:
        </motion.h1>
        <motion.img
          variants={childAnimation}
          src="src\assets\me2.jpg"
          alt="just me"
          className="ml-10 mt-5"
        />
      </motion.div>
      <motion.p variants={childAnimation} className="float-right w-2/3 mx-5">
        Hello there! I am Sam and I am an aspiring software dev. Currently
        learning a full-stack course. Welcome to my portfolio where I showcase
        some of the projects I've been working on during the course.
        <br />
        plz enjoy
      </motion.p>
    </motion.div>
  );
}
