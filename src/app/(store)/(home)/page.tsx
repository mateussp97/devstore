import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });
  const products = await response.json();

  return products;
}

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[unset] md:max-h-[860px] grid-cols-3 md:grid-cols-6 lg:grid-cols-9 grid-rows-[unset] md:grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-3 lg:col-span-6 row-span-[unset] md:row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center aspect-square md:aspect-[unset]"
      >
        <div className="max-w-[920px] w-full h-fit">
          <Image
            src={highlightedProduct.image}
            alt={highlightedProduct.title}
            className="w-full h-fit group-hover:scale-105 transition-transform duration-500"
            width={920}
            height={920}
            quality={100}
          />
        </div>

        <div className="absolute bottom-10 right-10 lg:bottom-28 lg:right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-[unset] md:row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center aspect-square md:aspect-[unset]"
        >
          <div className="max-w-[920px] w-full h-fit">
            <Image
              src={product.image}
              className="w-full h-fit group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt={product.title}
            />
          </div>

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
