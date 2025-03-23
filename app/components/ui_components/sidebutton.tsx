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
    <li className="cursor-pointer flex h-[50px] px-[12px]  flex-row items-center justify-start">
      <Image
        src={icon}
        alt="icon"
        className="not-dark:invert w-[22px] h-[23px] transform translate-x-[1px]"
      />
      <a
        href=""
        className={`ml-[16px] ${weight} transform translate-y-[1.4px] translate-x-[1.5px] text-[16px]`}
      >
        {label}
      </a>
    </li>
  );
};

export default sidebutton;
