"use client";

import Image from "next/image";
import { useState } from "react";
import { PiMagnifyingGlass, PiUserCircle } from "react-icons/pi";
import DropDownWrapper from "./dropDownWrapper";
import nvLogo from "@/public/logo/nv-logo.svg";
import navItems from "@/data/header.json";

export default function Header() {
  const { navmenu, navlink } = navItems;
  const [active, setActive] = useState<number | null>(null);
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex items-center container w-full">
        <Image src={nvLogo} alt="NVIDIA Logo" />
        <div className="w-full hidden lg:flex justify-between text-nv-gray items-center">
          <ul className="flex ms-10">
            {navmenu.map((menu, index) => (
              <li className="w-20" key={menu.name}>
                <span
                  className={`w-full relative py-2  ${
                    active === index && `border-b-nv-green border-b-4`
                  }`}
                  onClick={() =>
                    setActive((prev) => (prev != index ? index : null))
                  }
                >
                  {menu.name}
                </span>
                <DropDownWrapper
                  active={active === index ? true : false}
                  menu={menu}
                />
              </li>
            ))}
          </ul>
          <ul className="flex justify-evenly w-96 text-sm">
            {navlink.map((menu) => (
              <li key={menu.name}>{menu.name}</li>
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
