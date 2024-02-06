import { useState } from "react";
import Success from "./Success";

//eslint-disable-next-line
export default function Contact({ setPage }) {
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const handleDismiss = () => {
    setShowSuccess(false);
    setPage("home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    let newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name_warn = "Name can only contain letters and spaces";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@scu.edu")) {
      newErrors.email_warn = "Email should be from @scu.edu domain";
    }

    if (!message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
    }

    setErrors(newErrors);
  };

  return (
    <>
      {showSuccess && <Success Dismiss={handleDismiss} />}
      <h2>Contact Us</h2>
      <section>
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            {errors.name && <p className="error">{errors.name}</p>}
            {errors.name_warn && (
              <p className="error warning">{errors.name_warn}</p>
            )}
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.email_warn && (
              <p className="error warning">{errors.email_warn}</p>
            )}
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            {errors.message && <p className="error">{errors.message}</p>}
            <textarea name="message" rows="5" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
