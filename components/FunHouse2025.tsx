// components/GebuJuly25.tsx
import React from "react";
import BattleBox from "./BattleBox";
import Link from "next/link";

export default function FunHouse2025() {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8 bg-gray-500 w-full px-3 p-8">
      <header className="bg-gray-200 text-black text-xl sm:text-3xl font-extrabold rounded-lg text-center w-full py-2">
       UNCLE KICKS FunHouse 2025
      </header>

      {/* Container for two brackets side by side */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-8 mt-6">
        
        {/* Left Bracket */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-lg font-bold text-red-400">Bracket 1</h2>

          {/* Winner */}
          <div className="w-full flex justify-center">
            <div className="border-2 flex flex-col items-center border-yellow-400 p-2 text-center bg-gray-700 rounded-xl w-full max-w-[220px]">
              <h3 className="text-yellow-300 font-bold mb-2 text-sm">Winner 👑</h3>
              <Link href="/user/Gebu">
                <BattleBox name="Gebu" sprite="/sprites/bowser.png" />
              </Link>
            </div>
          </div>

          {/* Finals */}
          <div className="w-full flex justify-center gap-2 sm:gap-6">
            <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
              <Link href="/user/ACJATB"><BattleBox name="AC Just A Thang Baby" sprite="/sprites/zelda.png" /></Link>
            </div>
          </div>

          {/* Semifinals */}
          <div className="w-full flex justify-center gap-2 sm:gap-6">
            <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
              <Link href="/user/ty"><BattleBox name="Ty" sprite="/sprites/pokemon_trainer.png" /></Link>
            </div>
            <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/unk"><BattleBox name="UNK" sprite="/sprites/donkey_kong.png" /></Link>
              <Link href="/user/ACJATB"><BattleBox name="AC Just A Thang Baby" sprite="/sprites/pikachu.png" /></Link>
            </div>
          </div>
        </div>

        {/* Right Bracket */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-lg font-bold text-yellow-400">Bracket 2</h2>

          {/* Winner */}
          <div className="w-full flex justify-center">
            <div className="border-2 flex flex-col items-center border-yellow-400 p-2 text-center bg-gray-700 rounded-xl w-full max-w-[220px]">
              <h3 className="text-yellow-300 font-bold mb-2 text-sm">Winner 👑</h3>
              <Link href="/user/Gebu">
                <BattleBox name="Gebu" sprite="/sprites/bowser.png" />
              </Link>
            </div>
          </div>

          {/* Finals */}
          <div className="w-full flex justify-center gap-2 sm:gap-6">
            <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
              <Link href="/user/ACJATB"><BattleBox name="AC Just A Thang Baby" sprite="/sprites/zelda.png" /></Link>
            </div>
          </div>

          {/* Semifinals */}
          <div className="w-full flex justify-center gap-2 sm:gap-6">
            <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
              <Link href="/user/ty"><BattleBox name="Ty" sprite="/sprites/pokemon_trainer.png" /></Link>
            </div>
            <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
              <Link href="/user/unk"><BattleBox name="UNK" sprite="/sprites/donkey_kong.png" /></Link>
              <Link href="/user/ACJATB"><BattleBox name="AC Just A Thang Baby" sprite="/sprites/pikachu.png" /></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
