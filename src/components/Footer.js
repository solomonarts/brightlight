import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="py-8 text-white bg-black footer">
    <div className="container mx-auto text-center">
      <p className="text-sm">© 2025 FOM Community. All Rights Reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <FaFacebook className="text-xl cursor-pointer hover:text-red-500" />
        <FaTwitter className="text-xl cursor-pointer hover:text-red-500" />
        <FaLinkedin className="text-xl cursor-pointer hover:text-red-500" />
        <FaInstagram className="text-xl cursor-pointer hover:text-red-500" />
      </div>
    </div>
  </footer>
);

export default Footer;
