import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { HiMinusCircle } from "react-icons/hi";
import { IoChevronBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
const Cart = ({ cartValue, removefun }) => {
  const [quantities, setQuantities] = useState({}); // State to hold quantities
  const [amount, setAmount] = useState(0); // Initialize amount

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + delta > 0 ? (prev[id] || 1) + delta : 1,
    }));
  };

  useEffect(() => {
    let total = 0;
    cartValue?.forEach((item) => {
      total += item.price * (quantities[item.id] || 1);
    });
    setAmount(total.toFixed(2)); // Set the total amount with two decimal places
  }, [quantities, cartValue]); // Added cartValue as a dependency

  return (
    <article className="bg-gray-200 h-screen pt-4">
      <Link to="/">
        <div>
          <IoChevronBackCircle className="w-10 h-10 ml-5 cursor-pointer" />
        </div>
      </Link>
      {cartValue?.length === 0 ? (
        <div className="text-3xl font-bold text-center pt-10">
          Cart is Empty
        </div>
      ) : (
        cartValue.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="flex justify-center items-center gap-20 pb-5 border-2 border-black mx-7 bg-white pt-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 rounded-xl"
              />
              <div className="flex justify-center items-center gap-20 pb-5 mt-3">
                <p className="text-xl font-medium">${item.price}</p>
              </div>

              <div className="flex justify-center items-center gap-2">
                <IoIosAddCircle
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-7 h-7 cursor-pointer"
                />
                <div className="text-xl font-medium">
                  {quantities[item.id] || 1}
                </div>
                <HiMinusCircle
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-7 h-7 cursor-pointer"
                />
              </div>

              <div className="text-xl font-medium">
                ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
              </div>
              <div
                className="p-4 bg-red-600 text-white rounded-full cursor-pointer"
                onClick={() => removefun(item)}
              >
                Remove
              </div>
            </div>
          </div>
        ))
      )}

      <div className="flex justify-center items-center gap-10 pb-10 pt-5 mx-6">
        <div className="text-4xl p-4 rounded-xl font-bold">Total Cart</div>
        <div className="text-3xl font-bold">${amount}</div>
      </div>
    </article>
  );
};

export default Cart;
