export const listAllProducts = async (skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${skip}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const singleProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
