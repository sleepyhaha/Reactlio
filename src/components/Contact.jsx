import { useState } from "react";

export default function Contact() {
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
    <div className="w-11/12 m-auto h-1/3">
      <h1 className="my-10 font-bold">Contact Me</h1>
      <div className="flex flex-col items-center">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center"
          />
        </form>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center my-2"
          />
        </form>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            className="w-56 rounded-md hover:border-2 hover:border-neutral-400 ease-in-out duration-75 text-center"
          />
        </form>
        <button className="mt-5 bg-indigo-700 w-20 p-1 rounded-lg hover:scale-110 hover:bg-indigo-400 ease-in-out duration-75">
          Submit
        </button>
      </div>
    </div>
  );
}
