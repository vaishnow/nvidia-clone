"use client";

import { useState } from "react";
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
          className={`w-full absolute left-0 top-full h-full bg-nv-light shadow flex`}
        >
          {dropdowns?.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => setL1Active(index)}
                className={`h-full p-3 ${
                  l1Active === index && `border-b-nv-green border-b-4`
                }`}
              >
                {item?.name}
              </div>
              {l1Active === index && <DropDown data={item.lists} />}
            </div>
          ))}
        </div>
      )
    );
  else if (menu?.lists)
    return <DropDown className={`${!active && `hidden `}`} data={menu.lists} />;
}
