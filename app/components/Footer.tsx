"use client";
import { Anton } from "next/font/google";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 padding-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">Jaz Events Centre</h3>
          <p>Experience elegance and comfort at Ibadan’s premium venue for weddings, corporate gatherings, and celebrations.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Eleyele, Ibadan, Oyo State, Nigeria</p>
          <p>Email: info@jazevents.com</p>
          <p>Phone: +234 123 456 7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/jazevents_/" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 flex justify-between mt-10 pt-5 text-center">
        <h3 className={`${anton.className} text-xl`}>JAZ</h3>
        <p>&copy; {new Date().getFullYear()} Jaz Events Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
