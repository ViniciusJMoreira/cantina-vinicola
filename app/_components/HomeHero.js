import Link from "next/link";
import Image from "next/image";
import imgBackground from "@/public/bg.jpg";

export default function HomeHero() {
  return (
    <>
      <div className="relative isolate overflow-hidden min-h-svh flex flex-col justify-center mask-b-from-88% mask-b-to-100%">
        <Image
          alt="Azienda vinicola"
          src={imgBackground}
          fill
          className="object-cover obeject-top brightness-55 -z-10"
          placeholder="blur"
        />
        <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center w-60 sm:w-xs mx-auto">
              <div
                aria-hidden="true"
                className="w-full border-t border-yellow-500"
              />
              <div className="relative flex justify-center">
                <p className="font-cinzel text-xs sm:text-sm text-yellow-500 tracking-wide text-nowrap px-2">
                  Tradizione dal 1890
                </p>
              </div>
              <div
                aria-hidden="true"
                className="w-full border-t border-yellow-500"
              />
            </div>
            <h1 className="font-cinzel tracking-wider font-bold uppercase mt-2 text-2xl text-balance sm:text-4xl xl:text-6xl text-gray-200">
              Dove la Tradizione
              <br />
              Incontra l&apos;Eccellenza
            </h1>
            {/* <div
              aria-hidden="true"
              className="border-t border-gray-200 mx-auto w-sm mt-3"
            /> */}
            <h2 className="font-cinzel font-normal mt-6 sm:mt-10 text-xl tracking-wide sm:tracking-wider text-white sm:text-3xl xl:text-4xl">
              Nel cuore della Toscana, la famiglia Lorem produce vini pregiati
              seguendo metodi tradizionali tramandati da quattro generazioni.
            </h2>
            <div className="flex items-center justify-center gap-y-2 gap-x-6 mt-10">
              <Link
                href="/products"
                className="rounded-md bg-teal-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
              >
                Scopri i nostri vini
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
    </>
  );
}
