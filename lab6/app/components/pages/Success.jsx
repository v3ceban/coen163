//eslint-disable-next-line
export default function Success({ Dismiss }) {
  return (
    <div className="overlay" onClick={Dismiss}>
      <h2>Thank you!</h2>
      <p>Your form was submitted. </p>
      <button onClick={Dismiss}>Return</button>
    </div>
  );
}
