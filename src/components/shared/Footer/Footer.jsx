import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#A3A3A3]">
        <footer className="footer text-base-content py-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-40 justify-center items-center md:items-start w-full text-center md:text-left space-y-5">
            <nav>
              <h6 className="text-white text-xl font-semibold">Useful Link</h6>
              <div className="flex flex-col space-y-3 mt-4">
                <Link href="#" className="text-lg font-medium">
                  About Us
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Terms & Conditions
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Terms & Conditions
                </Link>
                <Link href="#" className="text-lg font-medium">
                  DMCA
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Disclaimer
                </Link>
                <Link href="#" className="text-lg font-medium">
                  FAQ
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Contact Us
                </Link>
              </div>
            </nav>
            <nav>
              <h6 className="text-white text-xl font-semibold">
                Product Categories
              </h6>
              <div className="flex flex-col space-y-3 mt-4">
                <Link href="#" className="text-lg font-medium">
                  Mobile Phones
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Tablets
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Watches
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Laptops
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Cameras
                </Link>
              </div>
            </nav>
            <nav>
              <h6 className="text-white text-xl font-semibold">
                Download Our Apps
              </h6>
              <div className="flex flex-col space-y-3 mt-4">
                <Link href="#" className="text-lg font-medium">
                  <Image
                    src="/assets/footer/google-play.svg"
                    width={200}
                    height={200}
                    alt="footer-img"
                  ></Image>
                </Link>
                <Link href="#" className="text-lg font-medium">
                  <Image
                    src="/assets/footer/appStore.svg"
                    width={200}
                    height={200}
                    alt="footer-img"
                  ></Image>
                </Link>
              </div>
            </nav>
            <aside>
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  width={200}
                  height={200}
                  alt="footer-img"
                ></Image>
              </Link>
            </aside>
          </div>
        </footer>
      </div>
      <div className="bg-[#959595] py-6">
        <div className="flex flex-col md:flex-row text-center justify-between items-center max-w-7xl mx-auto px-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium">
              © 2013-2025 MobileMaya.com | All Rights Reserved
            </h3>
          </div>
          <div className="flex space-x-3">
            <span className="bg-black px-2 py-2 rounded-full">
              <Link href="#">
                <FaFacebook className="text-white text-2xl" />
              </Link>
            </span>
            <span className="bg-black px-2 py-2 rounded-full">
              <Link href="#">
                <FaTwitter className="text-white text-2xl" />
              </Link>
            </span>
            <span className="bg-black px-2 py-2 rounded-full">
              <Link href="#">
                <FaYoutube className="text-white text-2xl" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
