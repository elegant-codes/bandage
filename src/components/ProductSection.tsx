import React from "react";
import Product from "./Product";
import Button from "@mui/material/Button";

interface ProductSection {
  showButton: boolean;
}

const ProductSection = ({ showButton }: ProductSection) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="flex py-6 flex-col md:flex-row md:flex-wrap md:gap-[0px] lg:gap[30px]">
        {arr.map((x) => (
          <Product key={x} />
        ))}
      </div>

      <div className=" px-10 py-[15px] flex-col justify-start items-center gap-2.5 inline-flex">
        <Button
          variant="outlined"
          size="large"
          fullWidth
          sx={{ height: "52px" }}
        >
          LOAD MORE PRODUCTS
        </Button>
      </div>
    </>
  );
};

export default ProductSection;
