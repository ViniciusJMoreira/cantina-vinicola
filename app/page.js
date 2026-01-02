// components
import Navigation from "@/app/_components/Navigation";
import HomeHero from "@/app/_components/HomeHero";
import Sales from "@/app/_components/Sales";
// custom
import HomePage from "./_components/HomePage";

export default function Page() {
  return (
    <main className="bg-teal-950 overflow-hidden h-[5000px] font-cinzel">
      <Navigation />
      <HomeHero />
      <Sales />
    </main>
  );
}
