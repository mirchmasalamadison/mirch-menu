import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import FindUs from "@/components/FindUs";

export default function Home() {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;
  return (
    <>
      <Navbar isMobile={isMobile} />
      <Hero />
      <Menu />
      <FindUs />
      <Footer />
    </>
  );
}
