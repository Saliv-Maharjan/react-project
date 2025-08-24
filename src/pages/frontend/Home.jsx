import ContactForm from "../../components/frontend/ContactForm";

const Home = () => {
  return (
    <div className="home-content">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              <span>MN</span> HARDWARES
            </h2>
            <p>The best of the quality.</p>
          </div>
          <div className="hero-btn">
            <button className="pri-btn">Explore more</button>
            <button className="sec-btn">Shop now</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="hero-img.png" />
        </div>
      </div>

      <div className="features">
        <h2>OUR SERVICES</h2>
      </div>

      <ContactForm />
    </div>
  );
};

export default Home;
