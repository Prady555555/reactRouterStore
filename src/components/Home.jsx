import { useNavigate } from "react-router-dom";

import Header from "./Header";

const Home = ({
  apiRecieve,
  setApiReceive,
  cartValue,
  setCartValue,
  cartAdded,
  warn,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky top-0 z-50 opacity-100">
        <Header
          cartLength={cartValue.length}
          cartValue={cartValue}
          warn={warn}
        />
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-4 mx-10 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3  ">
          {apiRecieve?.map((item) => (
            <div
              key={item.id}
              className="border-2 border-[#4d66fe] m-2  flex flex-col items-center justify-center p-4 bg-white shadow-md "
            >
              <img src={item.image} alt={item.title} className="w-40 h-40" />
              <h2 className=" font-extrabold text-xl text-center">
                {item.title}
              </h2>
              <p className="text-xl font-semibold mx-3">${item.price}</p>
              <div className="flex justify-center items-center gap-10  max-md:gap-3">
                <button
                  className="bg-[#4d66fe] text-white px-10 py-2 rounded-full cursor-pointer max-md:px-5  transition transform hover:scale-95 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
                  onClick={() => {
                    cartAdded(item);
                  }}
                >
                  CART
                </button>

                <div
                  className="bg-[#732df7] text-white px-10 py-2 rounded-full max-md:px-5 cursor-pointer transition transform hover:scale-95 motion-reduce:transition-none motion-reduce:hover:transform-none  "
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                  }}
                >
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
