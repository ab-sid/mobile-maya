import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ProductNews = () => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-4 mb-10">
      <div className="col-span-8">
        {/* title */}
        <div className="flex justify-between bg-white mb-1 p-3">
          <h2 className="text-xl font-semibold text-[#5A5759]">Product News</h2>
          <p className="text-[#344FF6]">
            <Link href="#" className="flex items-center">
              View More{" "}
              <span className="ml-1">
                <FaArrowRightLong />
              </span>
            </Link>
          </p>
        </div>
        <div className="p-3 border-2 rounded">
          <div className="flex space-x-4 mb-3 bg-white rounded-sm">
            <Image
              src="/assets/news/news3.jpg"
              width={200}
              height={200}
              alt="news"
            ></Image>
            <div className="pr-4 pb-2">
              <h3 className="text-xl font-bold my-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOmark
              </h3>
              <p className="text-[#444444] text-justify">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mb-3 bg-white rounded-sm">
            <Image
              src="/assets/news/news2.jpg"
              width={200}
              height={200}
              alt="news"
            ></Image>
            <div className="pr-4 pb-2">
              <h3 className="text-xl font-bold my-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOmark
              </h3>
              <p className="text-[#444444] text-justify">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </div>
          <div className="flex space-x-4 bg-white rounded-sm">
            <Image
              src="/assets/news/news3.jpg"
              width={200}
              height={200}
              alt="news"
            ></Image>
            <div className="pr-4 pb-2">
              <h3 className="text-xl font-bold my-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOmark
              </h3>
              <p className="text-[#444444] text-justify">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        {/* title */}
        <div className="flex justify-between bg-white mb-1 p-3">
          <h2 className="text-xl font-semibold text-[#5A5759]">Brands</h2>
          <p className="text-[#344FF6]">
            <Link href="#" className="flex items-center">
              View More{" "}
              <span className="ml-1">
                <FaArrowRightLong />
              </span>
            </Link>
          </p>
        </div>
        <div className="border-2 p-3">
          <div className="grid grid-cols-3 gap-3 gap-y-[26px]">
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/samsung.png"
                  width={70}
                  height={50}
                  alt="samsung"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Samsung</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/apple.png"
                  width={70}
                  height={50}
                  alt="apple"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Apple</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/google.png"
                  width={70}
                  height={50}
                  alt="google"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Google</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/google.png"
                  width={70}
                  height={50}
                  alt="google"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Google</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/samsung.png"
                  width={70}
                  height={50}
                  alt="samsung"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Samsung</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/apple.png"
                  width={70}
                  height={50}
                  alt="apple"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Apple</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/samsung.png"
                  width={70}
                  height={50}
                  alt="samsung"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Samsung</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/apple.png"
                  width={70}
                  height={50}
                  alt="apple"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Apple</h4>
            </div>
            <div className="p-2 bg-white rounded text-center">
              <Link href="#">
                <Image
                  src="/assets/brands/google.png"
                  width={70}
                  height={50}
                  alt="google"
                  className="mx-auto h-14 w-16"
                ></Image>
              </Link>
              <span className="block border-b mt-4"></span>
              <h4 className="text-[#5A5759] font-semibold">Google</h4>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="btn w-full bg-white rounded-none text-[#A7A7A7] text-xl font-light">
              More Brands{" "}
              <span className="text-[28px]">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNews;
