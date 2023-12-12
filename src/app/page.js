import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import FindUs from "@/components/FindUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <FindUs />
      <Footer />
      {/* <div className="check">
        C
      </div> */}
    </>
  );
}
