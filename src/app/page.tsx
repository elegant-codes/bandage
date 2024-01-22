import HeroCards from "@/components/HeroCards";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";
import feat1 from "@/assets/images/bx_bxs-book-reader.svg";
import feat2 from "@/assets/images/carbon_book.svg";
import feat3 from "@/assets/images/uil_arrow-growth.svg";

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

      {/*  */}
      <section className="container mx-auto">
        <div className="w-full py-20 flex-col justify-center pb-6 items-center gap-2.5 inline-flex">
          <p className="hidden lg:block text-center text-neutral-500 text-xl font-normal">
            Featured Products
          </p>
          <h3 className="w-[239px] md:w-full text-center text-slate-800 text-2xl font-bold">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[261px] md:w-full text-center text-neutral-500 text-sm font-normal">
            Problems trying to resolve the conflict between{" "}
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-[328px] flex-col justify-start items-center inline-flex">
              <div className="px-10 py-[35px] flex-col justify-start items-center gap-5 flex">
                <Image
                  src={feat1}
                  alt="feat 1"
                  className="object-cover object-center"
                />
                <div className="w-[235px] text-center text-slate-800 text-2xl font-bold leading-loose tracking-tight">
                  Easy Wins
                </div>
                <div className="w-[225px] text-center text-neutral-500 text-sm font-normal leading-tight tracking-tight">
                  Get your best looking smile now!
                </div>
              </div>
            </div>

            <div className="md:w-[328px] flex-col justify-start items-center inline-flex">
              <div className="px-10 py-[35px] flex-col justify-start items-center gap-5 flex">
                <Image
                  src={feat2}
                  alt="feat 1"
                  className="object-cover object-center"
                />
                <div className="w-[235px] text-center text-slate-800 text-2xl font-bold leading-loose tracking-tight">
                  Easy Wins
                </div>
                <div className="w-[225px] text-center text-neutral-500 text-sm font-normal leading-tight tracking-tight">
                  Get your best looking smile now!
                </div>
              </div>
            </div>

            <div className="md:w-[328px] flex-col justify-start items-center inline-flex">
              <div className="px-10 py-[35px] flex-col justify-start items-center gap-5 flex">
                <Image
                  src={feat3}
                  alt="feat 1"
                  className="object-cover object-center"
                />
                <div className="w-[235px] text-center text-slate-800 text-2xl font-bold leading-loose tracking-tight">
                  Easy Wins
                </div>
                <div className="w-[225px] text-center text-neutral-500 text-sm font-normal leading-tight tracking-tight">
                  Get your best looking smile now!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}

      <section className="container py-20 mx-auto">
        <div className="lg:w-full h-[134px] text-center ">
          <p className="text-center text-sky-500 text-sm font-bold leading-normal tracking-tight">
            Practice Advice
          </p>
          <h3 className="lg:w-full text-center text-slate-800 text-[40px] font-bold leading-[50px] tracking-tight">
            Featured Products
          </h3>
        </div>
      </section>
    </div>
  );
}
