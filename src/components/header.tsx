import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";

export function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-8">
        <div className="w-full flex items-center gap-5">
          <Link href="/" className="text-2xl font-extrabold text-white">
            devstore
          </Link>

          <div className="max-w-[320px] w-full hidden sm:block">
            <Suspense fallback={null}>
              <SearchForm />
            </Suspense>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <CartWidget />

          <div className="w-px h-4 bg-zinc-700" />

          <Link href="/" className="flex items-center gap-2 hover:underline">
            <span className="text-sm hidden lg:block">Account</span>
            <Image
              src="https://github.com/mateussp97.png"
              className="h-6 w-6 rounded-full"
              width={24}
              height={24}
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="w-full mt-4 block sm:hidden">
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
    </div>
  );
}
