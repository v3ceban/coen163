import { description } from "../content/description";

export default function Description() {
  const renderList = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <span className="title">{item.title}:</span> {item.body}
        </li>
      );
    });
  };

  return (
    <>
      <h2>Description</h2>
      <section>
        <h3>Definition</h3>
        <p>
          Waste Rewarder is a cutting-edge web application that incentivizes and
          rewards users for practicing proper waste management. By offering a
          unique system of carbon credits (CC) as a form of reward, the app
          encourages users to engage in eco-friendly behaviors such as
          recycling, composting, and reducing waste production. For every proof
          of utilization, users earn a specific number of carbon credits, with
          100 CC equivalent to $1.00. These carbon credits can be redeemed for
          digital rewards, including in-game items, subscriptions, or discounts
          at online retailers. Waste Rewarder provides a seamless platform for
          users to not only contribute to environmental sustainability but also
          enjoy tangible benefits in the form of digital rewards, making it an
          innovative and engaging solution for promoting eco-conscious habits.
        </p>
      </section>
      <section>
        <h3>Web app features</h3>
        <ul>{renderList(description.features)}</ul>
      </section>
      <section>
        <h3>Web app operation</h3>
        <p>
          Here&apos;s a step-by-step procedure for users to complete the task of
          waste management and get rewarded through the Waste Rewarder app
        </p>
        <ol>{renderList(description.operation)}</ol>
      </section>
    </>
  );
}
