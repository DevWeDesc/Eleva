import React from "react";
import Image from "next/image";
import logo from "@/../public/LogoEleva.jpg";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { SerchBar } from "./SerchBar";

export const Header = () => {
  return (
    <div className="px-7 py-4 grid grid-cols-12">
      <Image
        alt=""
        src={logo}
        width={70}
        className="rounded-full object-contain col-span-3"
      ></Image>
      <div className="col-span-6 flex items-center">
        <SerchBar />
      </div>
      <div className="col-span-3 flex h-full w-full justify-end gap-6 items-center">
        <div className="hover:bg-gray-100 rounded-full p-2  transition-all cursor-pointer">
          <AiOutlineShoppingCart className="text-3xl" />{" "}
        </div>
        <div className=" hover:bg-gray-100 rounded-full p-2 border-[2px] transition-all cursor-pointer">
          <AiOutlineUser className="text-3xl" />
        </div>
      </div>
    </div>
  );
};