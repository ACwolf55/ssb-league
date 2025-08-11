// components/GebuJuly25.tsx (or your existing file, replace contents)
import React from "react";
import BattleBox from "./BattleBox";

export default function GebuJuly2025() {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8 bg-gray-500 w-full px-3">
      <header className="bg-gray-200 text-blue-600 text-xl sm:text-3xl font-extrabold text-center w-full py-2 rounded">
        Gebu July 2025
      </header>

      {/* Winner */}
      <div className="w-full flex justify-center">
        <div className="border-2 border-yellow-400 p-2 text-center bg-gray-700 rounded-xl w-full max-w-[220px]">
          <h3 className="text-yellow-300 font-bold mb-2 text-sm">Winner 👑</h3>
          <BattleBox name="Gebu" sprite="/sprites/bowser.png" />
        </div>
      </div>

      {/* Finals */}
      <div className="w-full flex justify-center gap-2 sm:gap-6">
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <BattleBox name="Gebu" sprite="/sprites/bowser.png"  />
          <BattleBox name="AC Just A Thang Baby" sprite="/sprites/zelda.png"/>
        </div>
      </div>

      {/* Semifinals */}
      <div className="w-full flex justify-center gap-2 sm:gap-6">
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <BattleBox name="Gebu" sprite="/sprites/bowser.png"/>
          <BattleBox name="Ty" sprite="/sprites/pokemon_trainer.png"/>
        </div>
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <BattleBox name="UNK" sprite="/sprites/yoshi.png"/>
          <BattleBox name="AC Just A Thang Baby" sprite="/sprites/pikachu.png"/>
        </div>
      </div>

      {/* Round of 6 */}
      <div className="w-full flex justify-center gap-2 sm:gap-6 flex-wrap">
       
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <BattleBox name="Gebu" sprite="/sprites/bowser.png"/>
          <BattleBox name="Lamp" sprite="/sprites/sora.png"/>
        </div> 
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <BattleBox name="FTF" sprite="/sprites/ganondorf.png"/>
          <BattleBox name="UNK" sprite="/sprites/bowser.png" />
        </div>
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          *BYE*
          <BattleBox name="TY" sprite="/sprites/pokemon_trainer.png"/>
          <BattleBox name="AC Just A Thang Baby" sprite="/sprites/zelda.png"/>
        </div>
      </div>
    </div>
  );
}
