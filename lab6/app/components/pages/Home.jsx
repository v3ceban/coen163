import Image from "next/image";
import Garbage from "../../src/garbage.png";

export default function Home() {
  return (
    <>
      <h2>Welcome to Waste Rewarder!</h2>
      <section className="content">
        <h3>Who we are</h3>
        <Image
          src={Garbage}
          alt="Waste Rewarder Logo"
          height={200}
          width={200}
        />
        <p>
          Waste Rewarder is a user-friendly and interactive web application that
          aims to revolutionize waste management. By providing a platform that
          rewards users for their eco-friendly actions, we strive to motivate
          individuals to adopt sustainable practices and contribute to a greener
          future. With Waste Rewarder, users can track their waste reduction
          progress, earn points for recycling, and redeem exciting rewards from
          our partner businesses. Join us in making a positive impact on the
          environment and be rewarded for your efforts with Waste Rewarder!
        </p>
      </section>
    </>
  );
}
