import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Review = () => {
  return (
    <div className="my-5">
      <div className="flex justify-between bg-white mb-1 p-3 items-center">
        <h2 className="text-xl font-semibold text-[#5A5759]">Latest Reviews</h2>
        <p className="text-[#344FF6]">
          <Link href="#" className="flex items-center">
            View More{" "}
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </Link>
        </p>
      </div>
      <div className="p-4 border">
        <div className="grid grid-cols-4 gap-3">
          <div>
            <Link href="#">
              <div className="card bg-base-100 rounded-none rounded-b-md group overflow-hidden">
                <figure className="relative">
                  <Image
                    src="/assets/review/review1.jpg"
                    width={200}
                    height={200}
                    alt="review1"
                    className="w-full h-[200px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-0 bg-white px-10 py-1 flex items-center bg-opacity-30">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        defaultChecked
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                    </div>
                    <span className="ml-2 text-[#F59E0B]">4.5</span>
                  </div>

                  <div className="flex justify-between absolute bg-black bg-opacity-10 left-0 bottom-0 w-full px-1 py-1">
                    <h4 className="text-white font-xl">By Admin</h4>
                    <h4 className="text-white font-xl">July 7, 2024</h4>
                  </div>
                </figure>
                <div className="card-body py-3 px-2">
                  <h2 className="card-title text-[#646163]">
                    Samsung Galaxy A16 5G Full Review
                  </h2>
                  <p className="text-justify text-[#646163]">
                    Introducing the new Samsung Galaxy A16 5G, changing the way
                    you use your smartphone Lorem ipsum dolor sit amet
                    consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <div className="card bg-base-100 rounded-none rounded-b-md group overflow-hidden">
                <figure className="relative">
                  <Image
                    src="/assets/review/review2.jpg"
                    width={200}
                    height={200}
                    alt="review1"
                    className="w-full h-[200px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-0 bg-white px-10 py-1 flex items-center bg-opacity-30">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        defaultChecked
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                    </div>
                    <span className="ml-2 text-[#F59E0B]">4.5</span>
                  </div>

                  <div className="flex justify-between absolute bg-black bg-opacity-10 left-0 bottom-0 w-full px-1 py-1">
                    <h4 className="text-white font-xl">By Admin</h4>
                    <h4 className="text-white font-xl">July 7, 2024</h4>
                  </div>
                </figure>
                <div className="card-body py-3 px-2">
                  <h2 className="card-title text-[#646163]">
                    Samsung Galaxy A16 5G Full Review
                  </h2>
                  <p className="text-justify text-[#646163]">
                    Introducing the new Samsung Galaxy A16 5G, changing the way
                    you use your smartphone Lorem ipsum dolor sit amet
                    consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <div className="card bg-base-100 rounded-none rounded-b-md group overflow-hidden">
                <figure className="relative">
                  <Image
                    src="/assets/review/review1.jpg"
                    width={200}
                    height={200}
                    alt="review1"
                    className="w-full h-[200px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-0 bg-white px-10 py-1 flex items-center bg-opacity-30">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        defaultChecked
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                    </div>
                    <span className="ml-2 text-[#F59E0B]">4.5</span>
                  </div>

                  <div className="flex justify-between absolute bg-black bg-opacity-10 left-0 bottom-0 w-full px-1 py-1">
                    <h4 className="text-white font-xl">By Admin</h4>
                    <h4 className="text-white font-xl">July 7, 2024</h4>
                  </div>
                </figure>
                <div className="card-body py-3 px-2">
                  <h2 className="card-title text-[#646163]">
                    Samsung Galaxy A16 5G Full Review
                  </h2>
                  <p className="text-justify text-[#646163]">
                    Introducing the new Samsung Galaxy A16 5G, changing the way
                    you use your smartphone Lorem ipsum dolor sit amet
                    consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <div className="card bg-base-100 rounded-none rounded-b-md group overflow-hidden">
                <figure className="relative">
                  <Image
                    src="/assets/review/review1.jpg"
                    width={200}
                    height={200}
                    alt="review1"
                    className="w-full h-[200px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-0 bg-white px-10 py-1 flex items-center bg-opacity-30">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        defaultChecked
                        disabled
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-[#F59E0B]"
                        disabled
                      />
                    </div>
                    <span className="ml-2 text-[#F59E0B]">4.5</span>
                  </div>

                  <div className="flex justify-between absolute bg-black bg-opacity-10 left-0 bottom-0 w-full px-1 py-1">
                    <h4 className="text-white font-xl">By Admin</h4>
                    <h4 className="text-white font-xl">July 7, 2024</h4>
                  </div>
                </figure>
                <div className="card-body py-3 px-2">
                  <h2 className="card-title text-[#646163]">
                    Samsung Galaxy A16 5G Full Review
                  </h2>
                  <p className="text-justify text-[#646163]">
                    Introducing the new Samsung Galaxy A16 5G, changing the way
                    you use your smartphone Lorem ipsum dolor sit amet
                    consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
