import React, { useState } from "react";
import { v4 } from "uuid";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const ProductDesc = ({ item }) => {
  const [tabs, setTabs] = useState("review");
  console.log(item?.reviews);
  return (
    <div className="">
      <div className="flex items-center justify-center gap-10">
        <div
          onClick={() => setTabs("review")}
          className={`py-3 px-4 text-lg capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "review"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          Reviews ({item?.reviews?.length || 0})
        </div>

        <div
          onClick={() => setTabs("description")}
          className={`py-3 px-4 text-lg capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "description"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          description
        </div>
        <div
          onClick={() => setTabs("rule")}
          className={`py-3 px-4 text-lg capitalize border-b-2 border-transparent hover:text-yellow hover:border-b-2 hover:border-yellow ${
            tabs === "rule"
              ? "text-yellow border-b-2 border-yellow"
              : "text-dark "
          }`}
        >
          Shipping & Returns
        </div>
      </div>
      {tabs === "description" ? (
        <div className="p-10 mt-5 text-sm font-light leading-8 border text-gray border-gray border-opacity-20">
          <h3 className="mb-6 text-base font-medium text-dark">Description</h3>
          {item.desc}
        </div>
      ) : tabs === "rule" ? (
        <div className="p-10 mt-5 text-sm font-light leading-8 border text-gray border-gray border-opacity-10">
          <h3 className="mb-6 text-base font-medium text-dark">
            Delivery & returns
          </h3>
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
      ) : tabs === "review" ? (
        <div className="p-10 mt-5 text-sm leading-8 border text-gray border-gray border-opacity-20">
          <h3 className="text-base font-medium text-dark">
            Reviews ({item?.reviews?.length || 0})
          </h3>
          {item?.reviews?.length <= 1 ? (
            <div>no commmet</div>
          ) : (
            item?.reviews?.map((desc) => (
              <div
                key={v4()}
                className="py-10 text-sm font-light border-b text-gray border-gray border-opacity-20"
              >
                {desc}
                <div className="flex items-center gap-10 mt-10">
                  <span className="flex items-center gap-2 text-sm">
                    <AiOutlineLike />
                    Helpful (2)
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <AiOutlineDislike />
                    Unhelpful (2)
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDesc;
