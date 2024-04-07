import Image from "next/image";
import { PiMagnifyingGlass, PiUserCircle } from "react-icons/pi";
import nvLogo from "@/public/logo/nv-logo.svg";
import navItems from "@/data/header.json";

export default function Header() {
  const { navmenu, navlink } = navItems;
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex items-center container w-full">
        <Image src={nvLogo} alt="NVIDIA Logo" />
        <div className="w-full hidden lg:flex justify-between text-nv-gray items-center">
          <ul className="flex ms-10">
            {navmenu.map((menu) => (
              <li className="w-20" key={menu.name}>
                {menu.name}
              </li>
            ))}
          </ul>
          <ul className="flex justify-evenly w-96 text-sm">
            {navlink.map((menu) => (
              <li key={menu.name}>
                {menu.name}
              </li>
            ))}
            <li className="flex">
              <PiMagnifyingGlass className="size-6 mx-3" />
              <PiUserCircle className="size-6" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
