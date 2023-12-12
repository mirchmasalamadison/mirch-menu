import Image from "next/image";
import HeroDecoration from "../../public/assets/homeAssets/intro-decoration-hero.png";
import Link from "next/link";
import {  MdPhonelinkRing } from 'react-icons/md'
import bg from "../../public/assets/homeAssets/hero-paneer-tikka.jpeg";


const sectionStyle = {
    background: `linear-gradient(rgba(0, 15, 26, 0.4), rgba(0, 0, 0, 0.6)), url('./assets/homeAssets/hero-paneer-tikka.jpeg') no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '25% 30%',
}

const Hero = () => {
  return (
    <section 
    style={sectionStyle}
    
    className="hero-section">
      <div className="hero-content-container">
        <Image
          src={HeroDecoration}
          width={200}
          height={35}
          alt="small gold stem decoration for hero section"
        />

        <h3 className="hero-subtitle">
          Award Winning Indian Cuisine
        </h3>

        <h1 className="hero-title">MIRCH MASALA</h1>
        <div className="hero-buffet">
          <h4 className="hero-buffet-title">DAILY LUNCH BUFFET </h4>
          <p>
            TUE - SUN <br />
            11:30AM - 3:30PM
          </p>
        </div>

        <p>
          Located in Madison, WI, we serve award winning South Asian Cuisine <strong>bursting with fabulous
          flavors!</strong> <br />
          Come enjoy a savory culinary experience today or call us for takeout.
          <br/>
          <br/>

        </p>
        <Link href='tel:(608) 203-5387' className="hero-phone-container"><p className="hero-phone-number">(608) 203-5387 </p> <MdPhonelinkRing fontSize={36} className="phone-icon" />
          </Link>

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
