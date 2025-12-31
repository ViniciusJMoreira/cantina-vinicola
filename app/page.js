// components
import Navigation from "@/app/_components/Navigation";
import HomeHero from "@/app/_components/HomeHero";
import Sales from "@/app/_components/Sales";

export default function Page() {
  return (
    <main className="bg-primary overflow-hidden h-[5000px]">
      <Navigation />
      <HomeHero />
      <Sales />
    </main>
  );
}
