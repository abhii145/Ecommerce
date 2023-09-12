import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import toast from "react-hot-toast";
import Footer from "./Footer";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
import { MdPayment } from "react-icons/md";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const incr = (product) => {
    dispatch(increaseQuantity(product));
  };

  const decr = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const removed = (product) => {
    toast.success("removed");
    dispatch(removeFromCart(product));
  };
 

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b py-2"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-lg">{product.title}</p>
                    <p className="text-gray-500">${product.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decr(product.id)}
                    disabled={product.quantity === 1}
                    className="text-gray-600"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => incr(product.id)}
                    className="text-gray-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removed(product.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between">
              <p className="text-xl font-semibold">
                Total Price: ${calculateTotalPrice(cartItems)}
              </p>
              <button
                className="bg-sky-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center"
                onClick={()=> toast.error('something went wrong')}
              >
                <span>checkout</span>
                <MdPayment className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer isFixed={true} />
    </>
  );
};

function calculateTotalPrice(cartItems) {
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return totalPrice.toFixed(2);
}

export default withAuthenticationRequired(Cart, {
  onRedirecting: () => (
    <ReactLoading type={"cylon"} color="blue" height={667} width={375} />
  ),
});
