import React, { useState } from "react";
import { use } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./redux/productSlice";
import { postBlog } from "./redux/blogSlice";

const Addproduct = () => {
  let [data, setData] = useState({
    title: "",
    price: "",
    id: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(addProduct(data));
    dispatch(postBlog(data));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={data.title}
          name="title"
          onChange={handleInput}
        />
        <input
          type="number"
          value={data.price}
          name="price"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addproduct;
