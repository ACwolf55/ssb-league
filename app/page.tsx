import Image from "next/image";
import BattleBox from "@/components/BracketBox";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 
  sm:p-20 bg-gray-600">
<header className="h-[15vh] w-full flex items-center justify-center bg-white text-blue-600 text-5xl font-extrabold">
  SSB LEAGUE
</header>



    
  <main className="flex flex-col items-center space-y-12 mt-12">
    {/* Winner BracketBox */}
    <BattleBox name={"Gebu"}/>
  
    {/* Finals: 1 Matchup = 1 BracketBox with 2 players */}
    <div className="flex justify-center w-full max-w-2xl gap-x-8">
      <BattleBox name={"Gebu"}/>
      <BattleBox name={"AC Just A Thang Baby"}/>
    </div>

    {/* Semifinals: 2 Matchups = 2 BracketBoxes with 2 players each */}
    <div className="flex justify-center w-full max-w-5xl gap-x-16">
      <BattleBox name={"Gebu"}/>
      <BattleBox name={"Lamp"}/>
      <BattleBox name={"AC Just A Thang Baby"}/>
      <BattleBox name={"UNK"}/>
      
    </div>

     <div className="flex justify-center w-full max-w-5xl gap-x-16">
      <BattleBox name={"Gebu"}/>
      <BattleBox name={"AC Just A Thang Baby"}/>

      <BattleBox name={"FTF"}/>
      <BattleBox name={"UNK"}/>
      <BattleBox name={"Ty"}/>
      <BattleBox name={"Lamp"}/>
      
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
