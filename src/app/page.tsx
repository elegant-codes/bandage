import HeroCards from "@/components/HeroCards";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCards />

      <section className="container mx-auto">
        <div className="w-full flex-col justify-center pb-6 items-center gap-2.5 inline-flex">
          <p className="hidden lg:block text-center text-neutral-500 text-xl font-normal">
            Featured Products
          </p>
          <h3 className="w-[239px] md:w-full text-center text-slate-800 text-2xl font-bold">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[261px] md:w-full text-center text-neutral-500 text-sm font-normal">
            Problems trying to resolve the conflict between{" "}
          </p>

          <ProductSection showButton />
        </div>
      </section>
    </div>
  );
}
