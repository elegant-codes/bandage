import React from "react";
import Product from "./Product";

interface ProductSection {
  showButton: boolean;
}

const ProductSection = ({ showButton }: ProductSection) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex py-6 flex-col md:flex-row md:flex-wrap md:gap-[0px] lg:gap[30px]">
      {arr.map((x) => (
        <Product key={x} />
      ))}
    </div>
  );
};

export default ProductSection;
