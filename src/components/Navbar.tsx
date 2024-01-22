"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrCart, GrAdd } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(true);

  return (
    <div className="bg-ban-light ">
      <div className="px-8 py-6 flex justify-between items-center">
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

      {showDropdown && (
        <div className="flex justify-center py-20 bg-ban-light ">
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
    </div>
  );
};

export default Navbar;
