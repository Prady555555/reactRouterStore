import { IoStorefront } from "react-icons/io5";
import { Link } from "react-router-dom";
import { online } from "../assets";
const Header = ({ cartLength }) => {
  return (
    <div className="flex justify-between items-center p-8 pr-16 bg-gray-300">
      <img src={online} className=" h-44 rounded-3xl" />
      <Link to="/cart">
        <div className="flex flex-col justify-center items-center">
          <div>
            <IoStorefront className="text-4xl text-[#f4136b] w-16 h-16" />
          </div>
          <span className="text-2xl font-bold  text-black  ">{cartLength}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
