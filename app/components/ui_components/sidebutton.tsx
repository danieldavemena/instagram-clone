import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  icon: StaticImageData;
  label: string;
  selected: boolean;
}

const sidebutton: React.FC<props> = ({ icon, label, selected }) => {
  const isSelected = selected;
  var weight;

  const selectionChecker = () => {
    if (isSelected) {
      weight = "font-semibold tracking-[1px]";
    } else {
      weight = "font-light";
    }
  };

  selectionChecker();

  return (
    <li className="flex h-[50px] flex-row items-center justify-start">
      <Image
        src={icon}
        alt="icon"
        className="size-[22.5px] transform -translate-y-[3px]"
      />
      <a
        href=""
        className={`ml-[16px] ${weight} transform -translate-y-[2px]  text-[16px]`}
      >
        {label}
      </a>
    </li>
  );
};

export default sidebutton;
