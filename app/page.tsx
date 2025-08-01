import Image from "next/image";
import BattleBox from "@/components/BattleBox";
import GebuJuly2025 from "@/components/GebuJuly25";


export default function Home() {
  return (
    <div
      className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 
  sm:p-20 bg-gray-600"
    >
      <header className="h-[15vh] w-full flex items-center justify-center bg-white text-blue-600 text-5xl font-extrabold">
        SSB LEAGUE
      </header>

      <main>
      
      <GebuJuly2025 />


      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
      </footer>
    </div>
  );
}
