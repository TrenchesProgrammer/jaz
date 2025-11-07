"use client";
import { useState } from "react";
import { Anton } from "next/font/google";
import { BsTelephone } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="padding-container py-3 text-[#e0e0e0] fixed w-full max-w-[1440px] z-50 bg-black">
      <div className="flex justify-between items-center">
        <h2 className={`${anton.className} text-2xl tracking-wide`}>JAZ</h2>
        <div className="hidden md:flex gap-5 items-center">
          <p>About</p>
          <p>Gallery</p>
          <p>Faq</p>
          <div className="flex items-center gap-2">
            <BsTelephone />
            <p>+234 (0) 811 830 0072</p>
          </div>
          <button className="border border-[#e0e0e0] px-5 rounded-md py-2">
            BOOK
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Gallery</p>
            </li>
            <li>
              <p>Faq</p>
            </li>
            <li className="flex items-center gap-2">
              <BsTelephone />
              <p>+234 (0) 811 830 0072</p>
            </li>
            <li>
              <button className="border border-[#e0e0e0] px-5 rounded-md py-2">
                BOOK
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
