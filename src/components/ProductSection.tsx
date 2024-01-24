"use client";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Button from "@mui/material/Button";
import { listAllProducts } from "@/utils/api";
import { ProductType } from "@/utils/types";

interface ProductSection {
  showButton: boolean;
}

const ProductSection = ({ showButton }: ProductSection) => {
  const [skip, setSkip] = useState<number>(0);
  const [response, setResponse] = useState({
    products: [],
    skip: 0,
    total: 0,
  });
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts(skip);
  }, [skip]);

  console.log(response);

  const handleLoadMore = () => {
    if (skip !== 100) {
      setSkip((prev) => prev + 10);
    }
  };

  const getAllProducts = async (skip: number): Promise<void> => {
    try {
      const res = await listAllProducts(skip);
      setResponse((prev) => ({
        ...prev,
        ...res,
        products: [...prev.products, ...res.products],
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <div className="flex py-6 flex-col md:flex-row md:flex-wrap md:gap-[0px] lg:gap[30px]">
        {response.products.length > 0
          ? response?.products?.map((p: ProductType) => (
              <Product key={p.id} data={p} />
            ))
          : null}
      </div>

      <div className=" px-10 py-[15px] flex-col justify-start items-center gap-2.5 inline-flex">
        <Button
          variant="outlined"
          size="large"
          fullWidth
          sx={{ height: "52px" }}
          onClick={handleLoadMore}
        >
          LOAD MORE PRODUCTS
        </Button>
      </div>
    </>
  );
};

export default ProductSection;
