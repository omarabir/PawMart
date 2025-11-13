import React from "react";
import { FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
const WhyAdopt = () => {
  return (
    <section className="py-16 bg-[#fcb2ab] text-gray-800 content mt-5 rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Adopt from PawMart?</h2>
        
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Every year, millions of pets end up in shelters, waiting for a second
          chance. When you adopt, you're not just getting a pet—you're saving a
          life. Adopting from PawMart means supporting a community dedicated to
          animal welfare, reducing pet overpopulation, and finding a companion
          who will love you unconditionally. Choose adoption, and be a hero to a
          pet in need.
        </p>
        <div className="flex justify-center gap-8 text-4xl">
          <FaHeart />
          <FaShieldAlt />
          <FaUsers />
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
