import Link from "next/link";
import Image from "next/image";
import HeroDecoration from "../../public/assets/homeAssets/intro-decoration-hero.png";

const Footer = () => {
  return (
    <footer className="footer">
              <Image
          src={HeroDecoration}
          width={200}
          height={35}
          alt="small gold stem decoration for hero section"
        />
      <p id="copyright-text">
        © 2023 MIRCH MASALA. ALL RIGHTS RESERVED.
      </p>
      <p>
        DEVELOPED IN COLLABORATION WITH {" "}

      </p>
      <Link
          id="web-hill"
          href="https://www.webhilltech.com"
          rel="noopener noreferrer"
          target="_blank"
        
        >
         
          WEB HILL TECH
        </Link>
    </footer>
  );
};

export default Footer;
