import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";

const LatestMobile = () => {
  return (
    <div>
      <div className="flex justify-between bg-white mb-1 p-3 items-center">
        <h2 className="text-lg md:text-xl font-semibold text-[#5A5759]">
          Latest Mobile Phones
        </h2>
        <p className="text-[#344FF6]">
          <Link href="#" className="flex items-center">
            View More{" "}
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </Link>
        </p>
      </div>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile1.png"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile2.jpg"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile1.png"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile2.jpg"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile1.png"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile2.jpg"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile1.png"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile2.jpg"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile1.png"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
          <div className="md:w-60 h-[330px] border relative shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex items-center mt-3 ml-3 bg-green-50 p-1 rounded-full w-[60px]">
              <p className="mr-1 ml-2 text-xl">4.5</p>
              <span className="text-[12px] text-green-600">
                <FaStar />
              </span>
            </div>

            <div className="text-center flex flex-col space-y-2">
              <Image
                src="/assets/latest/mobile2.jpg"
                width={80}
                height={80}
                alt="latest1"
                className="mx-auto transform group-hover:scale-150 transition-transform duration-300"
              />
              <h3 className="font-medium">Xiomi POCO C53</h3>
              <h5 className="flex items-center justify-center text-xl text-[#344FF6] space-x-2">
                <span className="text-xl text-[#344FF6]">
                  <TbCurrencyTaka />
                </span>
                19,999 <span className="text-[#FB9853]">(official)</span>
              </h5>
            </div>

            <div className="absolute bottom-0 w-full">
              <button className="btn bg-[#E5E5E5] rounded-none w-full text-[#7D7B7C]">
                <span>+</span> Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestMobile;
