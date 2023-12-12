import Image from "next/image"


const Navbar = () => {
  return (
<nav className="navbar">

  <div className="nav-container">

   <div className="navbar-logo">
        <Image 
        className="navbar-logo-img"
        src='/assets/mirch_logo.png'
        width={176}
        height={100}
        alt="mirch masala logo"/>
    </div>


    <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/menu" className="nav-link">Menu</a>
        <a href="/contact" className="nav-link">Contact</a>
    </div> 
  </div>

</nav>
  )
}

export default Navbar
