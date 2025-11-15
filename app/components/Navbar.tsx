"use client";
import Link from "next/link";
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
        <Link href="/" className={`${anton.className} text-2xl tracking-wide`}>JAZ</Link>
        <div className="hidden md:flex gap-5 items-center">
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/booking#faq">Faq</Link>
          <div className="flex items-center gap-2">
            <BsTelephone />
            <Link href="tel:09028708098">+234 (0) 902 870 8098</Link>
          </div>
          <Link href="/booking" className="border border-[#e0e0e0] px-5 rounded-md py-2">
            BOOK
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes name="close" className="w-6 h-6" /> : <FaBars name="hamburger" className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/booking#faq">Faq</Link>
            </li>
            <li className="flex items-center gap-2">
              <BsTelephone />
            <Link href="tel:09028708098">+234 (0) 902 870 8098</Link>
            </li>
            <li>
              <Link href="/booking" className="border border-[#e0e0e0] px-5 rounded-md py-2">
                BOOK
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
