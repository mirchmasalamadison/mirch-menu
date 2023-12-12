import Image from "next/image";
import HeroDecoration from "../../public/assets/homeAssets/intro-decoration-hero.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-container">
        <Image
          src={HeroDecoration}
          width={200}
          height={35}
          alt="small gold stem decoration for hero section"
        />

        <h3 className="hero-subtitle">
          Madison's Award Winning Indian Cuisine
        </h3>

        <h1 className="hero-title">MIRCH MASALA</h1>
        <div className="hero-buffet">
          <h4>Serving Lunch Buffet </h4>
          <p>
            TUE - SUN <br />
            11:30AM - 3:30PM
          </p>
        </div>

        <p>
          We serve award winning South Asian Cuisine bursting with fabulous
          flavors! <br />
          Come enjoy a savory culinary experience during our lunch buffet,
          dinner, or takeout.
        </p>

        <div className="hero-buttons">
          <div className="hero-btn-container">
            <button className="hero-menu btn">Explore Menu</button>
          </div>

          <div className="hero-btn-container">
            <button className="hero-doordash btn">Doordash</button>
          </div>
        </div>

        {/* <div className="hero-divider">

    </div> */}
      </div>

      <div class="triangle-left"></div>
      <div class="triangle-right"></div>
    </section>
  );
};

export default Hero;
