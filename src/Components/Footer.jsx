import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // Official X logo
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#fcb2ab] dark:text-black text-base-content py-12 px-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="space-y-4">
          <p className="text-2xl font-bold text-[#FE7F73]">PawMart</p>
          <p className="text-sm leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>
        </aside>

        <nav className="space-y-2">
          <h6 className="font-semibold text-lg">Useful Links</h6>
          <div className="flex flex-col space-y-1">
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/pets-and-supplies" className="link link-hover">
              Pets & Supplies
            </Link>
            <a href="#contact" className="link link-hover">
              Contact
            </a>
            <a href="#terms" className="link link-hover">
              Terms of Use
            </a>
          </div>
        </nav>

        <nav className="space-y-2">
          <h6 className="font-semibold text-lg">Social</h6>
          <div className="flex gap-4 items-center">
            <a className="hover:text-primary transition-colors">
              <FaFacebook size={20} />
            </a>
            <a className="hover:text-primary transition-colors">
              <BsYoutube size={20} />
            </a>
            <a className="hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a className="hover:text-primary transition-colors">
              <SiX size={20} />
            </a>{" "}
            {/* Official X logo */}
          </div>
        </nav>
      </div>
      <p className="text-xs text-gray-500 text-center mt-3">
        © {new Date().getFullYear()} - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
