import { useState } from "react";
import { easeOut, motion } from "framer-motion";

export default function Contact() {
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
    exit: {
      opacity: 0,
      y: -100,
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      return setFirstName(value);
    } else if (name === "lastName") {
      return setLastName(value);
    } else if (name === "email") {
      return setEmail(value);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks for getting in touch ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="w-11/12 m-auto h-1/3"
    >
      <motion.h1 variants={animation} className="my-10 font-bold">
        Contact Me
      </motion.h1>
      <motion.div variants={animation} className="flex flex-col items-center">
        <motion.form
          variants={childAnimation}
          className="form"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center"
          />
        </motion.form>
        <motion.form
          variants={childAnimation}
          className="form"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center my-2"
          />
        </motion.form>
        <motion.form
          variants={childAnimation}
          className="form"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center"
          />
        </motion.form>
        <motion.button
          variants={childAnimation}
          className="mt-5 bg-indigo-700 w-20 p-1 rounded-lg hover:scale-110 hover:bg-indigo-400 ease-in-out duration-75"
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
