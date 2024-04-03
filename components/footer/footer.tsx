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
        <div className="bg-slate-950 text-white flex justify-around">
          {footerInfo.map((item) => (
            <div className="w-96" key={item.title}>
              <FooterInfo footerList={item} />
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex">
            <IoMailOutline />
            <p>Sign Up for NVIDIA News</p>
            <a
              href="https://www.nvidia.com/en-in/preferences/email-signup/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div className="flex">
            <span>Follow NVIDIA</span>
            <FooterSocial />
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <Image
            src={nvLogoBlack}
            alt="NVIDIA Logo black"
            className="w-28 h-auto"
          />
          <span>India</span>
        </div>
      </div>
      <div>
        <FooterLinks />
        <p>Copyright © 2024 NVIDIA Corporation</p>
      </div>
    </footer>
  );
}
