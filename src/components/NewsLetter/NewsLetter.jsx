import React from "react";
import { TfiEmail } from "react-icons/tfi";
const NewsLetter = () => {
  return (
    <div className="bg-[#D4D4D4]">
      <div className="flex justify-between py-10 max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-2xl text-white mr-3 font-bold">
            <TfiEmail />
          </span>
          <h3 className="text-xl text-white font-bold">
            Subscribe for top stories & new lunches
          </h3>
        </div>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Your Email Address"
            className="input input-bordered w-full"
          />
          <button className="btn bg-[#515CA9] text-white px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
