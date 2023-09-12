import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiStore } from "react-icons/bi";
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const { openSignIn, signOut } = useClerk();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems?.length;
  const { isSignedIn, user } = useUser();

  return (
    <nav className="bg-slate-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BiStore className="text-white hover:text-emerald-400" size={35} />
          <Link to="/">
            <span className="text-white text-xl ml-2">Bazar</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative mr-14">
            {isSignedIn ? (
              <Link to="/cart">
                <FaShoppingCart className="text-white text-2xl" size={35} />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white text-xs absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            ) : (
              <>
                <div className="relative inline-block">
                  <div className="group inline-block">
                    <FaShoppingCart
                      className="text-white text-2xl cursor-pointer "
                      size={35}
                      onClick={() => openSignIn({})}
                    />
                    {cartItemCount > 0 && (
                      <span className="bg-red-500 text-white text-xs absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center">
            <div className="text-white text-xl mr-5">{user?.firstName} |</div>
            <div className="flex items-center">
              {isSignedIn ? (
                <>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <span>Logout</span>
                    <RiLogoutBoxLine className="ml-2" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center"
                    onClick={() => openSignIn({})}
                  >
                    <span>Login</span>
                    <RiLoginBoxLine className="ml-2" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
