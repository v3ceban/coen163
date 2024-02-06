import { info } from "../content/info.js";

export default function Info() {
  return (
    <>
      <h2>Information</h2>
      <section>
        <h3>What do we offer?</h3>
        {info.section_1.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </section>
      <section>
        <h3>Who are the users?</h3>
        {info.section_2.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </section>
      <section>
        <h3>Resources</h3>
        <p>
          These resources can provide valuable information and insights into
          waste management practices, policies, and sustainable solutions that
          can be incorporated into this web app.
        </p>
        <ul>
          {info.resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} rel="noreferrer" target="_blank">
                {resource.title}
              </a>
              : {resource.description}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
