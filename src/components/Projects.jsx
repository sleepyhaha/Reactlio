import { easeIn, easeOut, motion } from "framer-motion";

export default function Projects() {
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
      exit={{ y: "-10" }}
      className="mt-5 mx-5 h-5/6"
    >
      <motion.h1 variants={childAnimation} className="font-bold">
        My Projects
      </motion.h1>
      <motion.section
        variants={animation}
        className="columns-2 text-slate-900 font-extrabold mt-10"
      >
        <motion.div variants={childAnimation} className="relative group">
          <a href="https://github.com/sleepyhaha/samsung-universe">
            <img
              src="/assets/screenshot.png"
              alt="AirItinerary"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>AirItinerary</p>
            </div>
          </a>
        </motion.div>
        <motion.div variants={childAnimation} className="relative group mt-5">
          <a href="https://github.com/sleepyhaha/team-samsung">
            <img
              src="/assets/startscreen.png"
              alt="PictoHang"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>PictoHang</p>
            </div>
          </a>
        </motion.div>
        <motion.div variants={childAnimation} className="relative group">
          <a href="https://github.com/sleepyhaha/sams-coding-quiz">
            <img
              src="/assets/coding-quiz.png"
              alt="Coding quiz"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>Coding Quiz</p>
            </div>
          </a>
        </motion.div>
        <motion.div variants={childAnimation} className="relative group mt-5">
          <a href="https://github.com/sleepyhaha/week-2-challenge">
            <img
              src="/assets/original-portfolio.jpg"
              alt="Original portfolio"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>Original Portfolio</p>
            </div>
          </a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
