import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Product Image */}
      <img 
        src={product?.image} 
        alt={product?.title} 
        className="rounded-t-lg w-full h-64 object-contain p-2 hover:scale-110 duration-500 ease-linear transition-all hover:cursor-pointer" 
      />
      {/* Product Content */}
      <div className="p-4">
        <h2 className="text-sm h-10 font-semibold text-gray-800 mb-2 line-clamp-2">{product?.title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 ">{product?.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${product?.price}</span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">&#9733;</span>
            <span className="text-sm text-gray-500">{product?.rating.rate} ({product?.rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
