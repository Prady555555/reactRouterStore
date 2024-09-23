import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
const Products = () => {
  const { id } = useParams();
  const [productApi, setProductApi] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProductApi(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to="/">
        <div className=" pt-9">
          <IoChevronBackCircle className="w-10 h-10 ml-5 cursor-pointer" />
        </div>
      </Link>
      <div
        className="flex justify-center items-center gap-14 pt-20 max-md:flex-col max-lg:px-4 pb-5 
      "
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <img src={productApi.image} className="w-60 h-60" />
          <div className="text-3xl font-extrabold max-md:text-2xl max-md:text-center">
            {productApi.title}
          </div>
          <div className="text-4xl font-extrabold text-red-600">
            ${productApi.price}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-medium">Description:</div>
          <div className="w-72 h-full p-6text-justify text-2xl font-semibold">
            {productApi.description}...
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
