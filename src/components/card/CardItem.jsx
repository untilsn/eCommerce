import React from "react";
import { v4 } from "uuid";
export const ReviewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-yellow"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const CardItem = () => {
  return (
    <div className="max-w-[400px] w-full h-[500px] border border-gray border-opacity-15 bg-light">
      <img
        className="w-full h-[276px] object-cover"
        src="/item/itemcard1.jpg"
        alt=""
      />
      {/* content */}
      <div className="flex flex-col gap-2 p-5 bg-light">
        <div className="capitalize text-gray">apple,watch</div>
        <h1 className="text-xl">
          Apple – Watch Series 3 with White Sport Band
        </h1>
        <h2 className="text-xl text-yellow">$22.4</h2>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 ">
            {Array(5)
              .fill(0)
              .map((item) => (
                <ReviewIcon key={v4()}></ReviewIcon>
              ))}
          </div>
          <span className="capitalize text-gray text-opacity-60">
            (2 reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
