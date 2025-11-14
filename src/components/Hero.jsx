
import "../App.css";

 function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Your Future With Confidence</h1>
        <p>
         Gaining Confidance...............
        </p>

        <form className="hero-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
