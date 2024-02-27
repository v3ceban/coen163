//eslint-disable-next-line
export default function Welcome({ Dismiss }) {
  return (
    <div className="overlay" onClick={Dismiss}>
      <h2>Wellcome to Waste Rewarder</h2>
      <p>
        Scan your trash and get rewarded in games or in online marketplaces.
        <br />
        Register today to get <strong>100 CC</strong> bonus!
      </p>
      <button onClick={Dismiss}>Get Started</button>
    </div>
  );
}
