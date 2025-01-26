"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* nav top */}
      <div className="bg-[#F2F3F5] hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <h2 className="text-[#8D8E8E] text-sm sm:text-xl">
            Largest Gadget Site in Bangladesh
          </h2>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 3 3 1-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">
                7
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* nav middle */}
      <div className="navbar bg-base-100 px-4 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full relative">
          {/* Hamburger menu for mobile */}
          <div className="relative lg:hidden">
            <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Logo */}
          <div className="navbar-center">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                width={150}
                height={50}
                alt="logo"
              />
            </Link>
          </div>

          {/* Search icon for mobile */}
          <button className="lg:hidden text-2xl">
            <FaSearch />
          </button>

          {/* Desktop search bar */}
          <div className="hidden lg:flex navbar-center">
            <label className="input input-bordered flex items-center gap-2 relative rounded-none">
              <input
                type="text"
                className="grow w-[400px]"
                placeholder="What are you looking for?"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 5 5 5 1 1.06-1.06l2.755 2.754a.75.75 1 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 1 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute right-10">
                <select
                  className="select select-bordered rounded-none bg-[#D4D4D4]"
                  defaultValue="Mobile"
                >
                  <option>All</option>
                  <option>Mobile</option>
                  <option>Tablet</option>
                  <option>Laptop</option>
                </select>
              </div>
            </label>
          </div>

          {/* User icon */}
          <button className="hidden lg:block btn btn-ghost btn-circle">
            <span className="text-xl">
              <FaUser />
            </span>
          </button>
        </div>
      </div>

      {/* nav bottom */}
      <div className="bg-[#F2F3F5] py-0 md:py-3 shadow-md z-10 relative">
        <nav className="max-w-7xl mx-auto">
          <ul className="hidden lg:flex space-x-6">
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Top 10</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Brands</Link>
            </li>
            <li
              className="relative group hover:text-[#ffa500] cursor-pointer font-semibold"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Mobile Collections
              <IoIosArrowDown className="inline-block ml-1" />
              {dropdownOpen && (
                <ul className="absolute left-0 mt-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <li className="px-4 py-2 text-gray-500 hover:text-[#ffa500]">
                    <Link href="#">Mobile</Link>
                  </li>
                  <li className="px-4 py-2 text-gray-500 hover:text-[#ffa500]">
                    <Link href="#">Tablet</Link>
                  </li>
                  <li className="px-4 py-2 text-gray-500 hover:text-[#ffa500]">
                    <Link href="#">Laptop</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Mobiles</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Comparison</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Price List</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Compare</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Showrooms</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Service Center</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">Reviews</Link>
            </li>
            <li className="hover:text-[#ffa500] font-semibold">
              <Link href="#">News & Tips</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-20 shadow-md border-b">
          <div className="flex justify-between items-center p-4 border-b shadow-sm">
            {/* Logo */}
            <Image src="/assets/logo.png" alt="logo" width={100} height={50} />

            {/* User Icon & Notification */}
            <div className="flex items-center gap-4">
              <button className="text-2xl">
                <FaUser />
              </button>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 3 3 1-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item">
                  7
                </span>
              </div>
            </div>

            {/* Close Icon */}
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Top 10</Link>
              </li>
              <li>
                <Link href="#">Brands</Link>
              </li>

              {/* Mobile Collections Dropdown for Mobile */}
              <li
                className="relative"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <button className="flex justify-between w-full">
                  Mobile Collections
                  <IoIosArrowDown className="ml-2" />
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 pl-6 space-y-2">
                    <li>
                      <Link href="#">Mobile</Link>
                    </li>
                    <li>
                      <Link href="#">Tablet</Link>
                    </li>
                    <li>
                      <Link href="#">Laptop</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="#">Comparison</Link>
              </li>
              <li>
                <Link href="#">Price List</Link>
              </li>
              <li>
                <Link href="#">Showrooms</Link>
              </li>
              <li>
                <Link href="#">Reviews</Link>
              </li>
              <li>
                <Link href="#">News & Tips</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
