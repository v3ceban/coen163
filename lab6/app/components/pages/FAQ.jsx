import { useState } from "react";
import { faq } from "../content/faq";

export default function FAQ() {
  const [activeQuestion, setQuestion] = useState(0);
  const toggleAnswer = (index) => {
    if (activeQuestion === index) {
      setQuestion(null);
    } else {
      setQuestion(index);
    }
  };

  return (
    <>
      <h2>Frequently asked questions</h2>
      <section>
        {faq.map((content, index) => (
          <article key={index}>
            <h3
              onClick={() => toggleAnswer(index)}
              className={activeQuestion === index ? "" : "inactive"}
            >
              {content.question}
            </h3>
            {activeQuestion === index && <p>{content.answer}</p>}
          </article>
        ))}
      </section>
    </>
  );
}
