import Image from "next/image";
import gtcLogo from "@/public/logo/GTC23-Lockup.svg";
import { FaAngleRight } from "react-icons/fa6";

export default function gtcBanner() {
  return (
    <div className="bg-nv-light">
      <div className="flex container">
        <div className="w-40 mx-5">
          <Image src={gtcLogo} alt="NVIDIA GTC" className="h-auto" />
        </div>
        <div className="p-4 tracking-wider">
          <h4 className="text-2xl my-4 font-bold">
            The Conference for the Era of AI
          </h4>
          <p className="text-xl leading-7 my-4 text-nv-dark">
            <span>
              GTC is happening this week—in person and virtually. Explore all
              the incredible sessions and demos to see how breakthroughs in AI
              are shaping every industry, and our everyday lives.
            </span>
            <a
              href="https://www.nvidia.com/gtc/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-1 group w-32"
            >
              <strong>
                <span className="">Join Now</span>
                <span>
                  <FaAngleRight className="inline w-[10px] ms-2 text-nv-green group-hover:text-nv-dark group-hover:translate-x-2 duration-1000" />
                </span>
              </strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
