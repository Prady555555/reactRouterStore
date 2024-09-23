import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = ({
  apiRecieve,
  setApiReceive,
  cartValue,
  setCartValue,
  cartAdded,
}) => {
  return (
    <>
      <div>
        <Header cartLength={cartValue.length} cartValue={cartValue} />
      </div>
      <div className="flex justify-center items-center bg-gray-300">
        <div className="grid grid-cols-4 mx-10 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 ">
          {apiRecieve?.map((item) => (
            <div
              key={item.id}
              className="border-2 border-[#f4136b] m-2  flex flex-col items-center justify-center p-4 bg-white shadow-md shadow-[#f4136b]"
            >
              <img src={item.image} alt={item.title} className="w-40 h-40" />
              <h2 className=" font-extrabold text-xl text-center">
                {item.title}
              </h2>
              <p className="text-xl font-semibold mx-3">${item.price}</p>
              <div className="flex justify-center items-center gap-10  max-md:gap-3">
                <button
                  className="bg-[#f4136b] text-white px-10 py-2 rounded-full cursor-pointer max-md:px-5"
                  onClick={() => {
                    cartAdded(item);
                  }}
                >
                  CART
                </button>

                <div className="bg-[#f4136b] text-white px-10 py-2 rounded-full max-md:px-5 ">
                  VIEW
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
