import React from "react";
import {
  IoCallOutline,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { GoMail } from "react-icons/go";

const NavHeader = () => {
  return (
    <div className="w-full h-[58px] pt-[9px] pb-[3px] bg-ban-secondary justify-center items-center inline-flex">
      <div className="w-full self-stretch justify-center items-center inline-flex">
        <div className="h-[46px] px-6 justify-between items-start flex">
          <div className="w-[415px] justify-start items-center gap-2.5 flex">
            <div className="p-2.5  justify-start items-center gap-[5px] flex">
              <IoCallOutline size={16} color="#fff" />
              <div className="text-white text-sm font-bold leading-normal tracking-tight">
                (225) 555-0118
              </div>
            </div>
            <div className="p-2.5 justify-start items-center gap-[5px] flex">
              <GoMail size={16} color="#fff" />
              <div className="text-white text-sm font-bold leading-normal tracking-tight">
                michelle.rivera@example.com
              </div>
            </div>
          </div>
          <div className="p-2.5 justify-start items-start gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal tracking-tight">
              Follow Us and get a chance to win 80% off
            </div>
          </div>
          <div className="w-[233px] p-2.5 justify-start items-start gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal tracking-tight">
              Follow Us :
            </div>
            <div className="pr-[0.50px] justify-center items-start gap-[5.50px] flex">
              <div className="self-stretch p-[5px] justify-start items-start gap-2.5 inline-flex">
                <IoLogoInstagram size={16} color="#fff" />
              </div>
              <div className="self-stretch p-[5px] justify-start items-start gap-2.5 inline-flex">
                <IoLogoYoutube size={16} color="#fff" />
              </div>
              <div className="self-stretch p-[5px] justify-start items-start gap-2.5 inline-flex">
                <IoLogoFacebook size={16} color="#fff" />
              </div>
              <div className="self-stretch p-[5px] justify-start items-start gap-2.5 inline-flex">
                <IoLogoTwitter size={16} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
