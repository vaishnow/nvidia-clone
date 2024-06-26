import Image from "next/image";
import FooterInfo from "./footerInfo";
import FooterSocial from "./footerSocial";
import FooterLinks from "./footerLinks";
import { IoMailOutline } from "react-icons/io5";
import footerInfo from "@/data/footer-info.json";
import nvLogoBlack from "@/public/logo/nv-logo-black.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div className="w-full bg-nv-dark px-5 py-10">
            <div className="container text-white flex flex-wrap justify-between">
              {footerInfo.map((item) => (
                <div className="w-full sm:w-72" key={item.title}>
                  <FooterInfo footerList={item} />
                </div>
              ))}
            </div>
            <div className="max-lg:flex-col flex gap-4 container justify-between items-center mt-16">
              <div className="max-sm:flex-col flex items-center">
                <IoMailOutline className="text-nv-green w-16 h-12" />
                <p className="text-nv-light mx-5 text-lg">
                  Sign Up for NVIDIA News
                </p>
                <a
                  href="https://www.nvidia.com/en-in/preferences/email-signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-nv-green p-3 font-bold"
                >
                  Subscribe
                </a>
              </div>
              <div className="max-sm:flex-col text-center flex text-nv-gray">
                <span className="sm:me-5">Follow NVIDIA</span>
                <FooterSocial />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="flex max-sm:flex-col items-center sm:justify-between">
            <Image
              src={nvLogoBlack}
              alt="NVIDIA Logo black"
              className="w-28 h-auto"
            />
            <span className="text-nv-gray font-bold">India</span>
          </div>
        </div>
        <div className="container text-nv-gray">
          <div className="flex flex-wrap gap-2 justify-center">
            <FooterLinks />
          </div>
          <p className="text-xs mt-2 mb-6 text-center">Copyright © 2024 NVIDIA Corporation</p>
        </div>
      </div>
    </footer>
  );
}
