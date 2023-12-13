"use client";
import DesktopNavbar from "./Navbars/DesktopNavbar";
import MobileNavbar from "./Navbars/MobileNavbar";
// import Image from "next/image";

// import { useState } from "react";
// import Link from "next/link";
// import { MdMenu, MdClose, MdPhonelinkRing } from "react-icons/md";

const Navbar = ({ isMobile }) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />} </>;
};

export default Navbar;
