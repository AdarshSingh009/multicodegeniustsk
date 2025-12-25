'use client'

import React, { useState } from "react";
import {
  carticon,
  closeicon,
  crossicon,
  downarro,
  searchicon,
  threelineicon,
  usericon,
} from "@/assets/icon/icon";
import Link from "next/link";

const Navbar = () => {

  const [menuOpemClose, setMenuOpemClose] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-center px-2.5 py-6 bg-white z-[60]">
        <nav className="flex items-center w-full max-w-[1240px] gap-10">
          <div className="text-black lg:text-[32px] text-[25.2px] font-bold cursor-pointer leading-[1.1875]">
            SHOP.CO
          </div>
          <ul className="list-none lg:flex hidden items-center gap-5 m-0 pl-10">
            <li className="relative group">
              <div className="cursor-pointer text-black text-base font-normal flex items-center gap-1 [&>svg]:size-4 font-satoshi">
                Shop
                {downarro}
              </div>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white border border-[#cccccc]">
                <Link href={''} className="py-2 px-3 text-[#333333] font-satoshi">Men</Link>
                <Link href={''} className="py-2 px-3 text-[#333333] font-satoshi">Child</Link>
              </div>
            </li>
            <li>
              <Link href={''} className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                On Sale
              </Link>
            </li>
            <li>
              <Link href={''} className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href={''} className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                Brands
              </Link>
            </li>
          </ul>
          <div className="rounded-full bg-[#f0f0f0] px-4 py-3 gap-3 lg:flex hidden items-center">
            <div className="size-6 min-w-6 cursor-pointer">{searchicon}</div>
            <div className="flex-1">
              <input
                className="text-[#000000e6] font-satoshi text-base border-none bg-transparent w-full py-[1px] px-0.5 leading-[1.375]"
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-3.5 ml-auto">
            {carticon}
            {usericon}
          </div>

          <div className="lg:hidden relative z-[70] mb-[3px]" onClick={() => setMenuOpemClose(!menuOpemClose)}>{menuOpemClose ? closeicon : threelineicon}</div>
          <ul
            className={`list-none fixed z-[60] top-0 right-0 h-full w-full bg-[#cdcdcd] p-[15px] flex flex-col items-center justify-center m-0 transform translate-x-full transition-transform duration-300 ease-in-out ${menuOpemClose && 'translate-x-0!'}`}
          >
            <div className="flex flex-col w-full h-full mt-[100px] gap-7 px-5">
              <li className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                Shop
              </li>
              <li className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                On Sale
              </li>
              <li className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                New Arrivals
              </li>
              <li className="cursor-pointer text-black text-base font-satoshi flex items-center gap-[5px]">
                Brands
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
