"use client";
import DesktopNavbar from "./Navbars/DesktopNavbar";
import MobileNavbar from "./Navbars/MobileNavbar";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose, MdPhonelinkRing } from "react-icons/md";

const Navbar = ({ isMobile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}

      <div className="m-nav navbar">
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
          {/* <h1 id='check'> check </h1> */}
          <div className="navbar-icons">
            {isMobileMenuOpen ? (
              <MdClose
                onClick={toggleMobileMenu}
                className="menu-icon"
                color={"white"}
                style={{ backgroundColor: "#ba7d1d", borderRadius: "5px" }}
              />
            ) : (
              <MdMenu
                onClick={toggleMobileMenu}
                className="menu-icon"
                color={"white"}
                style={{ backgroundColor: "#ba7d1d", borderRadius: "5px" }}
              />
            )}
            <Link href="tel:(608) 203-5387" className="phone-number-link">
              <MdPhonelinkRing className="phone-icon" />
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <div className="mobile-menu-links">
                <Link
                  href="/"
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  Menu
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
