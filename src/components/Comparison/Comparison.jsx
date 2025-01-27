"use client";
import React, { useState } from "react";
import { TwoThumbs } from "../TwoThumbs/TwoThumbs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Comparison = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);
  return (
    <div className="md:grid grid-cols-2 gap-4 pt-10 pb-3">
      <div
        style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
        className="grid grid-cols-12 bg-white p-4 md:p-10 shadow-xl border border-[#e9e9e9]"
      >
        {/* Left Column */}
        <div className="w-[90%] md:w-full mx-auto md:mx-0 col-span-12 md:col-span-7 pr-0 md:pr-4 mb-8 md:mb-0">
          <h2 className="uppercase text-[#545FAB] font-bold text-2xl text-center">
            Lets Find A Mobile
          </h2>
          <TwoThumbs />
          <div className="flex justify-center mt-5">
            <button className="bg-[#515CA9] px-16 py-2 text-white font-bold flex items-center">
              FIND PRODUCTS{" "}
              <span className="ml-1 text-xl">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>

        {/* Vertical Border */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="h-40 mt-10 w-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-4">
          <h2
            className="text-[#404040] text-xl font-bold cursor-pointer flex items-center md:cursor-default justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            By Price
            <span
              className={`md:hidden ml-2 transform transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDown />
            </span>
          </h2>
          <span className="border-b-2 border-gray-200 w-full mt-2 block md:block"></span>

          {/* Dropdown visible only on mobile*/}
          <div
            className={`mt-5 md:hidden ${
              isDropdownOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <ul className="flex flex-col space-y-2">
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">Bellow BDT. 5,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 5,001 To 10,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 10,001 To 25,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 25,001 To 40,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 40,001 To 60,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">Over BDT. 60,000</Link>
              </li>
            </ul>
          </div>

          {/* Desktop "By Price" List */}
          <div className="hidden md:block mt-5">
            <ul className="flex flex-col space-y-2">
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">Bellow BDT. 5,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 5,001 To 10,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 10,001 To 25,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 25,001 To 40,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">BDT. 40,001 To 60,000</Link>
              </li>
              <li className="text-[#344FF6] font-semibold hover:underline">
                <Link href="#">Over BDT. 60,000</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-12 gap-8 bg-white p-4 md:p-10 shadow-xl mt-5 md:mt-0"
        style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
      >
        {/* By Brand */}
        <div className="col-span-12 md:col-span-6">
          <h2
            className="text-[#404040] text-xl font-bold flex items-center md:block cursor-pointer md:cursor-default justify-between"
            onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)} // Toggle dropdown for mobile
          >
            By Brand
            <span
              className={`ml-2 transform transition-transform duration-300 ${
                isBrandDropdownOpen ? "rotate-180" : "rotate-0"
              } md:hidden`}
            >
              <IoIosArrowDown />
            </span>
          </h2>
          <span className="border-b-2 border-gray-200 w-full mt-2 block md:block"></span>

          {/* Dropdown visible only on mobile */}
          <div
            className={`mt-5 md:hidden ${
              isBrandDropdownOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-3">
                <ul className="flex flex-col space-y-3">
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Samsung</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Xiaomi</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Asus</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Apple</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Nokia</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Oppo</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <ul className="flex flex-col space-y-3">
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">OnePlus</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Motorola</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Vivo</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Realme</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Google</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Micromax</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop "By Brand" List */}
          <div className="hidden md:block mt-5">
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-3">
                <ul className="flex flex-col space-y-3">
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Samsung</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Xiaomi</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Asus</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Apple</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Nokia</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Oppo</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <ul className="flex flex-col space-y-3">
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">OnePlus</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Motorola</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Vivo</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Realme</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Google</Link>
                  </li>
                  <li className="text-[#344FF6] hover:underline">
                    <Link href="#">Micromax</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* By Feature */}
        <div className="col-span-12 md:col-span-6">
          <h2
            className="text-[#404040] font-bold text-xl flex items-center cursor-pointer md:cursor-default justify-between"
            onClick={() => setIsFeatureDropdownOpen(!isFeatureDropdownOpen)} // Toggle dropdown for mobile
          >
            By Feature
            <span
              className={`ml-2 transform transition-transform duration-300 ${
                isFeatureDropdownOpen ? "rotate-180" : "rotate-0"
              } md:hidden`}
            >
              <IoIosArrowDown />
            </span>
          </h2>
          <span className="border-b-2 border-gray-200 w-full mt-2 block md:block"></span>

          {/* Dropdown visible only on mobile */}
          <div
            className={`mt-5 md:block ${
              isFeatureDropdownOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <div className="mt-3">
              <ul className="flex flex-col space-y-3">
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">4G VoLTE Mobile Phones</Link>
                </li>
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">5G Mobile</Link>
                </li>
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">Punch-hole Camera Mobiles</Link>
                </li>
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">Waterproof Mobile</Link>
                </li>
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">Slim Mobiles</Link>
                </li>
                <li className="text-[#344FF6] hover:underline">
                  <Link href="#">Lightweight Mobiles</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
