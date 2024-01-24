import React from "react";
import { ProductType } from "@/utils/types";
import Image from "next/image";

const Product = ({ data }: { data: ProductType }) => {
  return (
    <div className="md:px-5 lg:w-1/5 md:w-1/2 h-[522px] flex-col justify-start items-start flex">
      <div className="h-[522px] bg-white flex-col justify-start items-start flex">
        <div className="w-full h-[360px] flex-col justify-center items-center flex">
          {/* <img className="w-full h-[360px] relative" src={data.images[1]} /> */}
          <Image
            src={data.images[0]}
            alt="Image Alt Text"
            className="object-contain"
            height={360}
            width={295}
          />
        </div>
        <div className="self-stretch h-[162px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
          <div className=" text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
            {data.title}
          </div>
          <div className="text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
            {data.category}
          </div>
          <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
            <div className=" text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
              ${(data.price + data.discountPercentage).toFixed(2)}
            </div>
            <div className=" text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
              ${data.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
