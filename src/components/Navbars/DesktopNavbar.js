import Image from "next/image";
import Link from "next/link";
import { MdPhonelinkRing } from "react-icons/md";

const DesktopNavbar = () => {
  return (
    <nav className="desktop-navbar navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <Image
            className="navbar-logo-img"
            src="./assets/mirch_logo.png"
            width={176}
            height={100}
            alt="mirch masala logo"
          />
        </div>

        <div className="navbar-links">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/menu" className="nav-link">
            Menu
          </Link>

          <Link href="tel:(608) 203-5387" className="phone-number-link">
            <MdPhonelinkRing fontSize={27} className="phone-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
