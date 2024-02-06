import { useState } from "react";

export default function Contact() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    let newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@scu.edu")) {
      newErrors.email = "Email should be from @scu.edu domain";
    }

    if (!message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
    } else {
      console.log(newErrors);
    }
  };

  return (
    <main className="contact">
      <h2>Contact Us</h2>
      <section>
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          {errors.name && <p className="error">{errors.name}</p>}
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
          <label>
            Message:
            <textarea name="message" rows="5" />
          </label>
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
