import React, { useState } from "react";

const ProductDesc = () => {
  const [tabs, setTabs] = useState("desc");

  return (
    <div className="">
      <div className="flex items-center justify-center gap-10">
        <div
          onClick={() => setTabs("desc")}
          className={`py-3 px-4 text-xl capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "desc"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          Description
        </div>

        <div
          onClick={() => setTabs("reture")}
          className={`py-3 px-4 text-xl capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "reture"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          Shipping & Returns
        </div>
        <div
          onClick={() => setTabs("review")}
          className={`py-3 px-4 text-xl capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "review"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          Reviews (2)
        </div>
      </div>
      {tabs === "desc" ? (
        <div className="p-10 mt-5 text-lg leading-8 border text-gray border-gray border-opacity-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          similique voluptatibus, dicta et voluptates, distinctio veritatis,
          architecto magnam ratione reiciendis dolore nisi error tempore fugiat
          molestiae incidunt ab ducimus ullam. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          temporibus, nemo est quia corporis dignissimos tempora, porro, earum
          aspernatur excepturi itaque sunt aperiam consequatur nostrum vitae aut
          recusandae ut saepe.
        </div>
      ) : tabs === "reture" ? (
        <div className="p-10 mt-5 text-lg font-light leading-8 border text-gray border-gray border-opacity-10">
          <h1 className="mb-5 text-xl font-normal text-dark">
            Delivery & returns
          </h1>
          We deliver to over 100 countries around the world. For full details of
          the{" "}
          <a
            href="#"
            className="py-1 capitalize border-b text-dark border-dark"
          >
            delivery options{" "}
          </a>
          we offer, please view our Delivery information We hope you’ll love
          every purchase, but if you ever need to return an item you can do so
          within a month of receipt. For full details of how to make a return,
          please view our{" "}
          <a
            href="#"
            className="py-1 capitalize border-b text-dark border-dark"
          >
            Returns information
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDesc;
