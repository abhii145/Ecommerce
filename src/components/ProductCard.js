import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product, }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    toast.success("added to cart");
    dispatch(addToCart(product));
  };

  const { title, price, image } = product;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden m-4 sm:m-2 md:w-1/2 lg:w-1/3 xl:w-1/4 ${
          isHovered ? "transform scale-105" : ""
        } transition-transform duration-300 ease-in-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain object-center"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title.slice(0, 52)}</h2>
          <p className="text-gray-600 text-sm">${price}</p>
          <button
            className="mt-2 bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full w-full"
            onClick={() => handleAdd(product)}
          >
            Add to Cart
          </button>
        </div>
        
      </div>
    </>
  );
};

export default ProductCard;
