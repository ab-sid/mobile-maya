"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility
  const [selectedItem, setSelectedItem] = useState("Mobile"); // State to track the selected item

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update the button text
    setDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <div>
      {/* nav top */}
      <div className="bg-[#F2F3F5]">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h2 className="text-[#8D8E8E] text-xl">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
      <div className="navbar bg-base-100 px-0 py-4 max-w-6xl mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={200}
              height={200}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center">
          <label className="input input-bordered flex items-center gap-2 relative w-[450px]">
            <input
              type="text"
              className="grow"
              placeholder="What are you looking for?"
            />
            {/* Dropdown Button */}
            <div className="relative">
              <button
                className="btn bg-[#D4D4D4] px-8 rounded-none"
                onClick={() => setDropdownVisible((prev) => !prev)} // Toggle dropdown visibility
              >
                {selectedItem} {/* Display the selected item */}
                <span className="text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </button>
              {dropdownVisible && ( // Conditionally render the dropdown
                <ul className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {["All", "Mobile", "Laptop", "Tablet"].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleItemClick(item)} // Update the selected item
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <span className="text-xl">
              <FaUser />
            </span>
          </button>
        </div>
      </div>
      {/* nav bottom */}

      <div className="bg-[#F2F3F5] py-3 shadow-md z-10 relative">
        <nav className="max-w-7xl mx-auto">
          <ul className="flex space-x-6 justify-center">
            <li className="hover:text-[#ffa500]">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Top 10</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Brands</Link>
            </li>
            <li className="relative group hover:text-[#ffa500]">
              {/* Parent Link */}
              <Link href="#" className="flex items-center">
                Mobile Collections{" "}
                <span className="text-xl">
                  <MdKeyboardArrowRight className="group-hover:hidden" />
                  <IoIosArrowDown className="hidden group-hover:inline" />
                </span>
              </Link>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
                <li className="px-4 py-2 hover:text-[#ffa500] cursor-pointer">
                  <Link href="#">Mobile</Link>
                </li>
                <li className="px-4 py-2 hover:text-[#ffa500] cursor-pointer">
                  <Link href="#">Tablet</Link>
                </li>
                <li className="px-4 py-2 hover:text-[#ffa500] cursor-pointer">
                  <Link href="#">Laptop</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Mobile</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Comparison</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Price List</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Compare</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Showrooms</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Service Centers</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">Reviews</Link>
            </li>
            <li className="hover:text-[#ffa500]">
              <Link href="#">News & Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
