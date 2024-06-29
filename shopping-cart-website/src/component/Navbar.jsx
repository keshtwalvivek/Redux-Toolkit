import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="flex justify-around p-8">
      <span>Redux Store</span>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      <div className="text-xl font-bold text-red-700 ">
        <span className="text-black">CART ITEM : </span>
        {cart ? cart.length : 0}
      </div>
    </div>
  );
};

export default Navbar;
