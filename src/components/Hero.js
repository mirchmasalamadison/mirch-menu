import Image from "next/image";
import HeroDecoration from "../../public/assets/homeAssets/intro-decoration-hero.png";
import Link from "next/link";
import {  MdPhonelinkRing } from 'react-icons/md'

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
          <br/>
          <br/>
          <Link href='tel:(608) 203-5387' className="hero-phone-container"><h3 className="hero-phone-number">(608) 203-5387 </h3> <MdPhonelinkRing fontSize={36} className="phone-icon" />
          </Link>
        </p>

        <div className="hero-buttons">
          <div className="hero-btn-container">
            <Link href='/menu'> <button className="hero-menu btn">Explore Menu</button></Link>
           
          </div>
          <div className="hero-btn-container">
          <Link href='tel:(608) 203-5387'><button className="hero-phone btn">Call Us</button></Link>
     
        
          </div>
          <div className="hero-btn-container">
          <Link href='https://www.doordash.com/store/mirchmasala-madison-977240/'><button className="hero-doordash btn">Doordash</button></Link>
        
          </div>

        </div>

        {/* <div className="hero-divider">

    </div> */}
      </div>

      <div className="triangle-left"></div>
      <div className="triangle-right"></div>
    </section>
  );
};

export default Hero;
