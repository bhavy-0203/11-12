import React from "react";
import { use } from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((store) => store.product);
  console.log(products);

  return (
    <div>
      {products.length > 0 &&
        products.map(({ title, price, id }) => (
          <div key={id}>
            <h1>{title}</h1>
            <p>{price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
