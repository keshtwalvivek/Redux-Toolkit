import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../store/cartSlice";
import { add } from "../store/cartSlice";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
const Product = () => {
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState("false");
  const dispatch = useDispatch();

  useEffect(() => {
    const fatchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fatchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-rows-5 grid-flow-col gap-4  mt-12 p-8  ">
      {product?.map((product) => (
        <div
          className="p-4 border-solid border-2 rounded-xl border-indigo-200 border-indigo-500 ..."
          key={product.id}
        >
          <img src={product.image} className="h-40 w-50 " alt="" />
          <h4 className="font-serif text-sm py-2">{product.title}</h4>
          <h5 className="text-red-700 font-semibold">${product.price}</h5>
          <button
            className="p-2 my-2 rounded-sm  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
            onClick={() => handleAdd(product)}
          >
            {" "}
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
