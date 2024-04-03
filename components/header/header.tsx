import Image from "next/image";
import { PiMagnifyingGlass, PiUserCircle } from "react-icons/pi";
import nvLogo from "@/public/logo/nv-logo.svg";
import navItems from "@/data/header.json";

export default function Header() {
  const { navmenu, navlink } = navItems;
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex items-center mx-auto w-full lg:w-[1000px] xl:w-[1280px]">
        <Image src={nvLogo} alt="NVIDIA Logo" />
        <div className="w-full hidden lg:flex justify-between ">
          <ul className="flex">
            {navmenu.map((menu) => (
              <li className="w-20" key={menu.name}>
                {menu.name}
              </li>
            ))}
          </ul>
          <ul className="flex">
            {navlink.map((menu) => (
              <li className="w-20" key={menu.name}>
                {menu.name}
              </li>
            ))}
            <li>
              <PiMagnifyingGlass />
            </li>
            <li>
              <PiUserCircle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
