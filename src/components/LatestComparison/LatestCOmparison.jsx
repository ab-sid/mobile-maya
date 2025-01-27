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
        <h2 className="text-lg uppercase font-semibold text-[#5A5759]">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="border shadow-md p-3">
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 right-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Tecno Prova 5 Pro 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 14,900</h4>
              </div>
              <div className="relative">
                <span className="block border mx-6 h-[250px] mt-2"></span>
                <div className="absolute top-1/4 left-[2.33%] bg-[#629FB6] px-2 py-1 rounded-full border-white border-8">
                  <p className="text-white">Vs</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison2"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 left-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Samsung Galaxy M34 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 12,900</h4>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10 hover:bg-[#629FB6] hover:border-[#629FB6]">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 right-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Tecno Prova 5 Pro 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 14,900</h4>
              </div>
              <div className="relative">
                <span className="block border mx-6 h-[250px] mt-2"></span>
                <div className="absolute top-1/4 left-[2.33%] bg-[#629FB6] px-2 py-1 rounded-full border-white border-8">
                  <p className="text-white">Vs</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison2"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 left-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Samsung Galaxy M34 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 12,900</h4>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10 hover:bg-[#629FB6] hover:border-[#629FB6]">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 right-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Tecno Prova 5 Pro 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 14,900</h4>
              </div>
              <div className="relative">
                <span className="block border mx-6 h-[250px] mt-2"></span>
                <div className="absolute top-1/4 left-[2.33%] bg-[#629FB6] px-2 py-1 rounded-full border-white border-8">
                  <p className="text-white">Vs</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison2"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 left-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Samsung Galaxy M34 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 12,900</h4>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10 hover:bg-[#629FB6] hover:border-[#629FB6]">
                COMPARE
              </button>
            </div>
          </div>
          <div className="border shadow-md p-3">
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/1.jpg"
                    width={200}
                    height={200}
                    alt="comparison1"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 right-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Tecno Prova 5 Pro 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 14,900</h4>
              </div>
              <div className="relative">
                <span className="block border mx-6 h-[250px] mt-2"></span>
                <div className="absolute top-1/4 left-[2.33%] bg-[#629FB6] px-2 py-1 rounded-full border-white border-8">
                  <p className="text-white">Vs</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Image
                    src="/assets/comparison/2.jpg"
                    width={200}
                    height={200}
                    alt="comparison2"
                    // className="w-[100px]"
                  ></Image>
                  <div className="absolute top-1 left-1 bg-[#629FB6] px-2 py-1 rounded-md">
                    <span className="text-white">83%</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-7 text-[#5A5759]">
                  Samsung Galaxy M34 5G
                </h3>
                <h4 className="font-bold text-[#9A3412] text-lg">Rs. 12,900</h4>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-outline border-2 border-[#629FB6] text-[#629FB6] rounded-md px-10 hover:bg-[#629FB6] hover:border-[#629FB6]">
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
