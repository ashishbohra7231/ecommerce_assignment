import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/productdetails?productid=${product?.id}`);
  };

  return (
    <div className="w-full bg-white border overflow-hidden border-gray-200 rounded-lg shadow-lg">
      <div className="relative">
        <div className="absolute z-10 top-2 left-2 px-3 bg-gray-100 flex items-center justify-center text-gray-600 text-xs py-1 rounded-full shadow-md">
          {product?.rating.rate} ({product?.rating.count}){" "}
          <FaStar className="text-yellow-400" />
        </div>

        <img
          onClick={handleImageClick} // Navigate on click
          src={product?.image}
          alt={product?.title}
          className="rounded-t-lg w-full h-64 object-contain p-2 hover:scale-110 duration-500 ease-linear transition-all hover:cursor-pointer"
        />
      </div>

      <div className="p-4">
        <h2 className="text-sm h-10 font-semibold text-gray-800 mb-2 line-clamp-2">
          {product?.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product?.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-green-600">
            ${product?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
