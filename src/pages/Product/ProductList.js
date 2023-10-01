import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Navebar from "../../component/Navebar/Navebar";

const ProductList = ({ text, stars, nature }) => {
  const { products } = useSelector((state) => state);

  return (
    <div
    
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      <Navebar />
      {products
        .filter((el) => {
          if (nature === "action") {
            return el.genre === "action";
          } else if (nature === "drama") {
            return el.genre === "drama";
          } else if (nature === "horror") {
            return el.genre === "horror";
          } else {
            return el;
          }
        })

        .filter(
          (el) =>
            el.title.trim().toUpperCase().includes(text.trim().toUpperCase()) &&
            el.rating >= stars
        )

        .map((el) => (
          <ProductCard key={el.id} el={el} />
        ))}
    </div>
  );
};

export default ProductList;