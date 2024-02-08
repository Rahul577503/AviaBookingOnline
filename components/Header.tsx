"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 bg-gray-800 text-white nav ${
        nav ? "nav-open" : ""
      }`}
      style={{ position: 'fixed', zIndex: 100, top: 0 }}
     
    >
      <div>
        <h1 className="text-xl font-signature ml-2">
          <Link
           
            href="/"
          >
            AviaBookings<span className="text-amber-500">Online</span>
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-links px-5 cursor-pointer capitalize font-medium text-gray-400 py-2 hover:text-red-400 ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="nav-links px-5 cursor-pointer capitalize gradient-border py-2">
          <Link href={"/call"}>Toll Free: 1877-804-0909</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-[14vh] xl:top:[10vh] left-0 w-full h-40 bg-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-2 text-xl  text-gray-400">
            <Link onClick={() => setNav(!nav)} href={"/home"}>
              Home
            </Link>
          </li>
          <li className="px-6 cursor-pointer capitalize text-lg  py-2 border-2 border-red-600 rounded-lg text-gray-400">
            <Link
              onClick={() => setNav(!nav)}
              href={"/home"}
            >
              Toll Free: 1877-804-0909
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
