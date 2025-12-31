import Image from "next/image";
import imgBackground from "@/public/bg.jpg";
import Link from "next/link";

export default function HomeHero() {
  return (
    <>
      <div className="relative isolate overflow-hidden min-h-svh flex flex-col justify-center">
        <Image
          alt="Azienda vinicola"
          src={imgBackground}
          fill
          className="object-cover obeject-top brightness-90 -z-10"
          placeholder="blur"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl text-white">
                Vini autentici che raccontano il nostro territorio
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
                Tradizione, qualità e passione dal vigneto al calice.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/products"
                  className="rounded-md bg-teal-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
                >
                  Scopri i vini
                </Link>
                <Link
                  href="/cantina"
                  className="text-sm/6 font-semibold text-grey-50 hover:text-gray-100"
                >
                  Visita la cantina <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
