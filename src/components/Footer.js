import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <p id="copyright-text">
        © {new Date().getFullYear()} MIRCH MASALA. ALL RIGHTS RESERVED.
      </p>
      <p>
        DEVELOPED IN COLLABORATION WITH{" "}
        <Link
          id="web-hill"
          href="https://www.webhilltech.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          WEB HILL TECH{" "}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
