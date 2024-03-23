import React from "react";
import footerBanner from "/code/eCommerce-redux/public/footerbanner.jpg";
import { FooterIconContact } from "../../../components/icon/IconContact";
const FooterBanner = () => {
  return (
    <div
      className="p-5 mb-20"
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center gap-10 p-10 bg-white">
        {/* right content */}
        <div className="flex-1 text-center">
          <h1 className="text-3xl">Shop Social</h1>
          <p className="text-2xl text-gray text-opacity-60">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.
          </p>
          {/* icon contact */}
          <div className="flex items-center justify-center gap-5">
            {FooterIconContact.map((item) => (
              <span className="inline-flex items-center justify-center p-3 text-2xl rounded-full bg-purple">
                {item.icon}
              </span>
            ))}
          </div>
        </div>
        {/* line */}
        <div className="h-[400px] max-w-[1px] w-full bg-gray bg-opacity-20"></div>
        {/* left content */}
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem assumenda sapiente eius modi doloribus explicabo, ipsa
          repudiandae esse ad eveniet facere quibusdam non nulla labore. Et
          tempore vel temporibus excepturi.
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
