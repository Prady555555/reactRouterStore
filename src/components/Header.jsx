import { IoStorefront } from "react-icons/io5";
import { Link } from "react-router-dom";
import { online } from "../assets";
const Header = ({ cartLength }) => {
  return (
    <div className="flex justify-between items-center p-8 pr-16 bg-gray-300">
      <img
        src={online}
        className=" h-44 rounded-3xl max-md:h-24 max-md:w-36 max-md:rounded-xl
         shadow-md shadow-[#f4136b]
      "
      />
      <Link to="/cart">
        <div className="flex flex-col justify-center items-center max-md:gap-2 shadow-md ">
          <div>
            <IoStorefront className="text-4xl text-[#f4136b] w-16 h-16 max-md:w-16 max-md:h-10 " />
          </div>
          <span className="text-2xl font-bold  text-black  ">{cartLength}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
