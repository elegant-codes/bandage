import React from "react";

const ContentCard = () => {
  return (
    <div className="w-[330px] h-[606px] bg-white shadow flex-col justify-start items-start inline-flex">
      <div className="w-[330px] h-[300px] relative">
        <img
          className="w-[330px] h-[300px] left-0 top-0 absolute"
          src="https://via.placeholder.com/330x300"
        />
        <div className="px-2.5 left-[20px] top-[20px] absolute bg-red-500 rounded-[3px] shadow justify-start items-center inline-flex">
          <div className="text-center text-white text-sm font-bold leading-normal tracking-tight">
            NEW
          </div>
        </div>
      </div>
      <div className="self-stretch h-[306px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-start items-center gap-[15px] inline-flex">
          <div className="text-blue-300 text-xs font-normal leading-none tracking-tight">
            Google
          </div>
          <div className="text-neutral-500 text-xs font-normal leading-none tracking-tight">
            Trending
          </div>
          <div className="text-neutral-500 text-xs font-normal leading-none tracking-tight">
            New
          </div>
        </div>
        <div className="w-[247px] text-slate-800 text-xl font-normal leading-[30px] tracking-tight">
          Loudest à la Madison #1 <br />
          (L'integral)
        </div>
        <div className="w-[280px] text-neutral-500 text-sm font-normal leading-tight tracking-tight">
          We focus on ergonomics and meeting <br />
          you where you work. It's only a <br />
          keystroke away.
        </div>
        <div className="self-stretch py-[15px] justify-between items-center inline-flex">
          <div className="justify-start items-center gap-[5px] flex">
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
            </div>
            <div className="text-neutral-500 text-xs font-normal leading-none tracking-tight">
              22 April 2021
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <div className="w-4 h-[14.67px] relative" />
            <div className="text-neutral-500 text-xs font-normal leading-none tracking-tight">
              10 comments
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">
            Learn More
          </div>
          <div className="w-[9px] h-4 relative" />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
