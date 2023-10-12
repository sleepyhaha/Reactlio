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

    const handleFormSubmit = (e) => {
      e.preventDefault();

      alert(`Thanks for getting in touch ${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
      setEmail("");
    };
  };
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          placeholder="First Name"
        />
      </form>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          placeholder="Last Name"
        />
      </form>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="email"
        />
      </form>
    </div>
  );
}
