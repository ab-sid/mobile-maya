import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";

const LatestCOmparison = () => {
  return (
    <div className="my-4">
      <div className="flex justify-between bg-white mb-1 p-3 items-center">
        <h2 className="text-xl font-semibold text-[#5A5759]">
          Latest Comparison
        </h2>
        <p className="text-[#344FF6]">
          <Link href="#" className="flex items-center">
            View More
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </Link>
        </p>
      </div>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-4 gap-3">
          <div className="border shadow-md p-3">
            <div className="flex justify-between items-center relative">
              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 right-3 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Tecno Prova 5 Pro 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 14,900
                </p>
              </div>

              {/* VS Styling */}
              <div className="relative -top-8">
                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#629FB6] rounded-full px-2 py-1 text-[#fff] font-semibold border-8 border-white">
                  VS
                </span>
                <span className="block border h-52 mx-10"></span>
              </div>

              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 left-5 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Samsung Galaxy M34 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 12,900
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between items-center relative">
              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 right-3 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Tecno Prova 5 Pro 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 14,900
                </p>
              </div>

              {/* VS Styling */}
              <div className="relative -top-8">
                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#629FB6] rounded-full px-2 py-1 text-[#fff] font-semibold border-8 border-white">
                  VS
                </span>
                <span className="block border h-52 mx-10"></span>
              </div>

              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 left-5 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Samsung Galaxy M34 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 12,900
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between items-center relative">
              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 right-3 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Tecno Prova 5 Pro 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 14,900
                </p>
              </div>

              {/* VS Styling */}
              <div className="relative -top-8">
                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#629FB6] rounded-full px-2 py-1 text-[#fff] font-semibold border-8 border-white">
                  VS
                </span>
                <span className="block border h-52 mx-10"></span>
              </div>

              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 left-5 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Samsung Galaxy M34 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 12,900
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between items-center relative">
              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 right-3 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Tecno Prova 5 Pro 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 14,900
                </p>
              </div>

              {/* VS Styling */}
              <div className="relative -top-8">
                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#629FB6] rounded-full px-2 py-1 text-[#fff] font-semibold border-8 border-white">
                  VS
                </span>
                <span className="block border h-52 mx-10"></span>
              </div>

              <div className="text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    className="w-[100px] h-[200px] mx-auto"
                  />
                  <span className="px-2 py-2 bg-[#629FB6] text-white text-center absolute top-1 left-5 rounded-md">
                    83%
                  </span>
                </div>
                <h3 className="">Samsung Galaxy M34 5G</h3>
                <p className="text-[#9A3412] text-lg mt-5 font-semibold">
                  Rs. 12,900
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10">
                COMPARE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCOmparison;
