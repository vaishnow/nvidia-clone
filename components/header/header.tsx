"use client";

import Image from "next/image";
import { useState } from "react";
import { PiMagnifyingGlass, PiUserCircle } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { TfiAngleDown } from "react-icons/tfi";
import DropDownWrapper from "./dropDownWrapper";
import nvLogo from "@/public/logo/nv-logo.svg";
import navItems from "@/data/header.json";

export default function Header() {
  const { navmenu, navlink } = navItems;
  const [active, setActive] = useState<number | null>(null);
  const [navExpand, setNavExpand] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center lg:container w-full mx-auto text-nv-gray">
        <button
          onClick={() => setNavExpand((prev) => !prev)}
          className="w-11 p-3 relative z-50"
        >
          {navExpand === true ? (
            <GrClose className="lg:hidden" />
          ) : (
            <RxHamburgerMenu className="lg:hidden" />
          )}
        </button>
        <Image src={nvLogo} alt="NVIDIA Logo" />
        <div
          className={`${
            !navExpand && `hidden`
          } lg:w-full lg:flex ps-2 lg:ps-0 justify-between absolute left-0 top-11 bottom-0 z-40 w-96 h-screen pb-14 lg:pb-0 bg-white lg:h-auto lg:static items-center overflow-y-scroll lg:overflow-hidden`}
        >
          <ul className={`${!navExpand && `hidden`} lg:flex lg:ms-10`}>
            {navmenu.map((menu, index) => (
              <li className="py-2 lg:py-0 lg:w-20" key={menu.name}>
                <span
                  className={`w-full flex justify-between relative py-2  ${
                    active === index &&
                    `border-0 border-b-nv-green lg:border-b-4`
                  }`}
                  onClick={() =>
                    setActive((prev) => (prev != index ? index : null))
                  }
                >
                  {menu.name}
                  <TfiAngleDown
                    className={`text-black mx-2 lg:hidden ${
                      active === index && `rotate-180`
                    }`}
                  />
                </span>
                <DropDownWrapper
                  active={active === index ? true : false}
                  menu={menu}
                />
              </li>
            ))}
          </ul>
          <ul className="lg:flex justify-evenly lg:w-72 lg:text-sm">
            {navlink.map((menu) => (
              <li
                key={menu.name}
                className={`${
                  !navExpand && `hidden`
                } py-2 lg:py-0 lg:inline pt-1`}
              >
                <a href={menu.url}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mx-2">
          <PiMagnifyingGlass className="absolute left-5 lg:static size-6 mx-3" />
          <PiUserCircle className="size-6" />
        </div>
      </div>
    </header>
  );
}
