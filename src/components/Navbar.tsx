"use client";
import React, { useState } from "react";
import { FiSearch, FiHeart } from "react-icons/fi";

import { GrCart, GrAdd } from "react-icons/gr";
import NavHeader from "./NavHeader";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="bg-ban-light ">
      <div className="lg:hidden px-8 py-6 flex justify-between items-center">
        <div className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">
          Bandage
        </div>

        <div className="flex justify-between gap-8">
          <div className="flex gap-6">
            <FiSearch size={24} color="#000" />
            <GrCart size={24} color="#000" />
          </div>
          <div onClick={() => setShowDropdown((prev) => !prev)}>
            {!showDropdown ? (
              <BiMenuAltRight size={24} color="#000" />
            ) : (
              <div className="rotate-45">
                <GrAdd size={24} color="#000" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SM SCREEN DROPDOWN */}
      {showDropdown && (
        <div className="flex justify-center py-20 bg-ban-light lg:hidden ">
          <div className="w-[123px] h-[270px] flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="text-center text-ban-secondtxt hover:font-light cursor-pointer text-3xl font-normal leading-[45px] tracking-tight">
              Home
            </div>
            <div className="text-center text-ban-secondtxt hover:font-light cursor-pointer text-3xl font-normal leading-[45px] tracking-tight">
              Product
            </div>
            <div className="text-center text-ban-secondtxt hover:font-light cursor-pointer text-3xl font-normal leading-[45px] tracking-tight">
              Pricing
            </div>
            <div className="text-center text-ban-secondtxt hover:font-light cursor-pointer text-3xl font-normal leading-[45px] tracking-tight">
              Contact
            </div>
          </div>
        </div>
      )}

      <div className=" hidden lg:block">
        <NavHeader />
      </div>
      {/* LARGE SCREEN NAV */}
      <div className="hidden lg:block">
        <div className="w-full h-[58px] pl-[38px] pr-[17px] justify-end items-center gap-10 flex">
          <div className="w-[187px] py-[13px] justify-start items-center inline-flex">
            <div className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">
              Bandage
            </div>
          </div>

          <div className="w-full justify-start items-center  flex grow">
            <ul className="self-stretch justify-center items-center  gap-[15px] flex">
              <li className="text-center text-ban-secondtxt cursor-pointer hover:font-medium text-sm font-bold tracking-tight">
                Home
              </li>
              <li className="text-ban-secondtxt font-bold cursor-pointer text-sm hover:font-medium  tracking-tight">
                Shop
              </li>
              <li className="text-center text-ban-secondtxt cursor-pointer hover:font-medium text-sm font-bold tracking-tight">
                About
              </li>
              <li className="text-center text-ban-secondtxt cursor-pointer hover:font-medium text-sm font-bold tracking-tight">
                Blog
              </li>
              <li className="text-center text-ban-secondtxt cursor-pointer hover:font-medium text-sm font-bold tracking-tight">
                Contact
              </li>
              <li className="text-center text-ban-secondtxt cursor-pointer hover:font-medium text-sm font-bold tracking-tight">
                Pages
              </li>
            </ul>
          </div>

          <div className="self-end justify-start items-center flex">
            <div className="w-[166px] h-[54px] justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="self-stretch p-[15px] rounded-[37px] justify-start items-center gap-[5px] inline-flex">
                  <div className="w-3 h-3 relative" />
                  <div className="text-center text-sky-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
                    Login / Register
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[46px] h-[46px] justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="p-[15px] rounded-[37px] justify-start items-center gap-[5px] inline-flex">
                  <FiSearch size={24} color="#23A6F0" />
                </div>
              </div>
            </div>
            <div className="w-14 h-[46px] justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="p-[15px] rounded-[37px] justify-start items-center gap-[5px] inline-flex">
                  <GrCart size={24} color="#23A6F0" />
                  <div className="text-center text-sky-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="w-14 h-[46px] justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="p-[15px] rounded-[37px] justify-start items-center gap-[5px] inline-flex">
                  <FiHeart size={24} color="#23A6F0" />
                  <div className="text-center text-sky-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
