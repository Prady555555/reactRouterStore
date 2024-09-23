import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { newLogo } from "../assets";
const Header = ({ cartLength, warn }) => {
  return (
    <div className="flex justify-between items-center p-8 pr-16  bg-opacity-65 max-md:gap-3  max-md:p-4 ">
      <img
        src={newLogo}
        className=" h-28 rounded-xl max-md:h-16 max-md:w-36 max-md:rounded-xl bg-transparent 
         
      "
      />
      {warn && (
        <div className="text-red-500 text-2xl max-md:text-xl font-bold">
          Already Added
        </div>
      )}
      <Link to="/cart">
        <div className="flex reltive justify-center items-center max-md:gap-1  ">
          <div>
            <IoCartOutline className="text-4xl text-[#732df7] w-20 h-20 max-md:w-16 max-md:h-14 " />
          </div>
          <span className="text-2xl font-bold absolute top-[36%] text-[#732df7] max-md:text-xl max-md:top-[30%]     ">
            {cartLength}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
