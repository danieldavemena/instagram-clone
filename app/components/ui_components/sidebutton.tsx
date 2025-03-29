import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  icon: StaticImageData;
  label: string;
  selected: boolean;
  isicon: boolean;
}

const sidebutton: React.FC<props> = ({ icon, label, selected, isicon }) => {
  const isSelected = selected;
  const isIcon = isicon;
  var weight;
  var border;

  const selectionChecker = () => {
    if (isSelected) {
      weight = "font-semibold tracking-[1px]";
    } else {
      weight = "font-light";
    }

    if (isIcon) {
      border = "";
    } else {
      border = "overflow-hidden object-fill rounded-full";
    }
  };

  selectionChecker();

  return (
    <li className="cursor-pointer flex h-[50px] px-[12px] flex-row items-center justify-start">
      <Image
        src={icon}
        alt="icon"
        className={`not-dark:invert w-[22px] h-[23px] ${border} transform translate-x-[1px]`}
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
