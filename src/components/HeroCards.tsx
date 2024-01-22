import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import cardOne from "@/assets/images/card-cover-5.svg";
import cardTwo from "@/assets/images/card-cover-6.svg";
import cardThree from "@/assets/images/card-cover-8.svg";
import cardFour from "@/assets/images/card-cover-7.svg";
import cardOnesm from "@/assets/images/card-cover-5-sm.svg";
import cardTwosm from "@/assets/images/card-cover-6-sm.svg";
import cardThreesm from "@/assets/images/card-cover-8-sm.svg";
import cardFoursm from "@/assets/images/card-cover-7-sm.svg";

const HeroCards = () => {
  return (
    <section className="container mx-auto">
      <div className="py-20 items-center justify-center ">
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <div className="lg:row-span-2">
            <BackgroundImage
              image={
                <Image
                  src={cardOne}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className=" h-[300px] lg:h-[616px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-span-2">
            <BackgroundImage
              image={
                <Image
                  src={cardTwo}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-start-2 lg:row-start-2">
            <BackgroundImage
              image={
                <Image
                  src={cardThree}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-start-3 lg:row-start-2">
            <BackgroundImage
              image={
                <Image
                  src={cardFour}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>

        <div className="grid lg:hidden grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <div className="lg:row-span-2">
            <BackgroundImage
              image={
                <Image
                  src={cardOne}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className=" h-[300px] lg:h-[616px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-span-2">
            <BackgroundImage
              image={
                <Image
                  src={cardTwo}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px]"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-start-2 lg:row-start-2">
            <BackgroundImage
              image={
                <Image
                  src={cardThree}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px] px-10"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="lg:col-start-3 lg:row-start-2">
            <BackgroundImage
              image={
                <Image
                  src={cardFour}
                  alt="Image Alt Text"
                  className="object-cover object-center"
                  fill
                />
              }
              className="h-[300px] px-10"
            >
              <div className="p-6 flex-col justify-start items-start gap-[5px] flex">
                <p className="text-green-500 text-sm font-bold">5 Items</p>
                <p className="text-slate-800 text-2xl font-bold">FURNITURE</p>
                <div className="text-slate-800 text-sm font-bold">
                  Read More
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
