"use client";

import { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import DropDown from "./dropDown";

interface Props {
  menu: {
    name: string;
    dropdowns?: any[];
    lists?: any[];
  };
  active: boolean;
}

export default function DropDownWrapper({ active, menu }: Props) {
  const { dropdowns, name } = menu;
  const [l1Active, setL1Active] = useState<number>(0);
  if (dropdowns)
    return (
      active && (
        <div
          className={`w-full lg:absolute left-0 top-full h-full bg-white lg:bg-nv-light shadow lg:flex`}
        >
          {dropdowns?.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => setL1Active(index)}
                className={`h-full flex justify-between p-3 ${
                  l1Active === index &&
                  `border-b-nv-green border-0 lg:border-b-4`
                }`}
              >
                {item?.name}
                <TfiAngleDown
                  className={`text-black lg:hidden ${
                    l1Active === index && `rotate-180`
                  }`}
                />
              </div>
              {l1Active === index && <DropDown data={item.lists} />}
            </div>
          ))}
        </div>
      )
    );
  else if (menu?.lists)
    return (
      active && (
        <DropDown className={`${!active && `hidden `}`} data={menu.lists} />
      )
    );
}
