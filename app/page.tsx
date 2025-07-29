import Image from "next/image";
import BracketBox from "@/components/BracketBox";

export default function Home() {
  return (
    <div >
       {/* Gebu jul 2025 bracket */}

     <main className="p-4 flex flex-col items-center space-y-8">
  {/* Winner */}
  <div className="w-40 h-20 bg-green-300 rounded flex items-center justify-center">
    Winner
  </div>

  {/* Finals - 2 boxes side by side */}
  <div className="flex justify-around w-full space-x-4">
    <div className="w-40 h-20 bg-blue-300 rounded flex items-center justify-center">
      Finalist 1
    </div>
    <div className="w-40 h-20 bg-blue-300 rounded flex items-center justify-center">
      Finalist 2
    </div>
  </div>

  {/* Semifinals - 4 boxes side by side */}
  <div className="flex justify-around w-full max-w-4xl space-x-4">
    <div className="w-40 h-20 bg-purple-300 rounded flex items-center justify-center">
      Semi 1
    </div>
    <div className="w-40 h-20 bg-purple-300 rounded flex items-center justify-center">
      Semi 2
    </div>
    <div className="w-40 h-20 bg-purple-300 rounded flex items-center justify-center">
      Semi 3
    </div>
    <div className="w-40 h-20 bg-purple-300 rounded flex items-center justify-center">
      Semi 4
    </div>
  </div>
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
