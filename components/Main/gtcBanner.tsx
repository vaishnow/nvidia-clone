import Image from "next/image";
import gtcLogo from "@/public/logo/GTC23-Lockup.svg";

export default function gtcBanner() {
  return (
    <div className="flex">
      <div>
        <Image src={gtcLogo} alt="NVIDIA GTC" className="w-24 h-auto" />
      </div>
      <div>
        <h4>The Conference for the Era of AI</h4>
        <p>
          GTC is happening this week—in person and virtually. Explore all the
          incredible sessions and demos to see how breakthroughs in AI are
          shaping every industry, and our everyday lives.{" "}
          <a href="https://www.nvidia.com/gtc/" target="_blank" rel="noopener noreferrer">
            Join Now
          </a>
        </p>
      </div>
    </div>
  );
}
