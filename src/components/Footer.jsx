 
import React from "react";
 
import { FaFacebook, FaLinkedin, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className=" footer w-full sm:footer-horizontal flex justify-around items-center gap-10    p-10 mt-10">
        <aside>
          <Link to={"/"}>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-purple-600 via-blue-500 from-blue-600 italic">
              E-Learn
            </h2>
          </Link>
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-br to-purple-600 via-blue-500 from-blue-600">
            E-Learn Industries Ltd.
            <br />
            Copyright © 2025 - All right reserved by E-Learn Ltd
          </p>
        </aside>
        <nav>
          <h4 className="footer-title font-bold text-transparent bg-clip-text bg-gradient-to-br to-purple-600 via-blue-500 from-blue-600">
            Social
          </h4>
          <div className="grid grid-flow-row md:grid-flow-col gap-4">
            <a href="https://www.facebook.com/">
              <FaFacebook size={28} />
            </a>
            <a href="https://x.com/">
              <FaSquareXTwitter size={28} />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube size={28} />
            </a>
            <a href="https://bd.linkedin.com/">
              <FaLinkedin size={28} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
