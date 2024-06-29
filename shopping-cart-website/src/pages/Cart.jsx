import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="p-12">
      <h1 className="text-3xl m-4 text-center font-bold"> Cart </h1>
      <div className="flex justify-between p-8">
        <h1 className="text-red-700 font-bold">Image</h1>
        <h1 className="text-red-700 font-bold">Description</h1>
        <h1 className="text-red-700 font-bold">Price</h1>
        <h1 className="text-red-700 font-bold">Action</h1>
      </div>
      <div className=" ">
        {cart.map((product) => (
          <div
            className="flex justify-between border-solid border-2 p-4 mb-4 "
            key={product.id}
          >
            <img className="w-26 h-16 mr-8" src={product.image} alt="" />
            <h1>{product.title}</h1>
            <p className="text-justify">${product.price}</p>
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-4 h-10 rounded-md"
              onClick={handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
