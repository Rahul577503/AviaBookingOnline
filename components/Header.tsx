'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 bg-gray-800 text-white nav ${
        nav ? "nav-open" : ""
      }`}
      style={{ position: 'fixed', zIndex: 100, top: 0, left: 0, right: 0 }}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-signature">
          <Link href="/" className="flex items-center">
           
              AviaBookings<span className="text-amber-500">Online</span>
            
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex justify-center items-center space-x-5">
        <li className="nav-links cursor-pointer capitalize font-medium text-gray-400 hover:text-amber-500">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize font-medium text-gray-400 hover:text-amber-500 gradient-border py-3">
          <Link href="tel:18778040909">Toll Free: 1877-804-0909</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-40 bg-gray-800 text-gray-500 md:hidden">
          <li className="cursor-pointer capitalize py-2 text-xl text-gray-400 hover:text-amber-500">
            <Link onClick={() => setNav(!nav)} href="/home">
              Home
            </Link>
          </li>
          <li className="cursor-pointer capitalize py-2 text-xl text-gray-400 hover:text-amber-500 border px-2 rounded-lg border-white">
            <Link onClick={() => setNav(!nav)} href="tel:18778040909">
              Toll Free: 1877-804-0909
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
