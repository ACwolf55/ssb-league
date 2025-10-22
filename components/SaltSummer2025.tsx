// components/GebuJuly25.tsx (or your existing file, replace contents)
import React from "react";
import BattleBox from "./BattleBox";
import Link from "next/link";

export default function SaltSummer2025() {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8 bg-gray-500 w-full px-3 p-8">
      <header className="bg-gray-200  text-black text-xl sm:text-3xl font-extrabold rounded-lg text-center w-full py-2 rounded">
        Salt Summer 2025
      </header>

      {/* Winner */}
      <div className="w-full flex justify-center">
        <div className="border-2 flex flex-col items-center border-yellow-400 p-2 text-center bg-gray-700 rounded-xl w-full max-w-[220px]">
          <h3 className="text-yellow-300 font-bold mb-2 text-sm">Winner 👑</h3>
          <Link href="/user/UNK">
          <BattleBox name="UNK" sprite="/sprites/donkey_kong.png" />
          </Link>
        </div>
      </div>

      {/* Finals */}
      <div className="w-full flex justify-center gap-2 sm:gap-6">
        <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex items-center gap-2 sm:gap-4">
          <Link href="/user/UNK">
          <BattleBox name="UNK" sprite="/sprites/donkey_kong.png"  />
          </Link>
          <Link href="/user/Kicks">
          <BattleBox name="Kicks" sprite="/sprites/wii_fit_trainer.png"/>
          </Link>
        </div>
      </div>

      {/* Semifinals */}
      <div className="w-full flex justify-center gap-2 sm:gap-6">
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <Link href="/user/UNK">
          <BattleBox name="UNK" sprite="/sprites/samus.png"/>
          </Link>
          <Link href="/user/Gebu">
          <BattleBox name="Gebu" sprite="/sprites/piranha_plant.png"/>
          </Link>
        </div>
        <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4">
          <Link href="/user/Lamp">
          <BattleBox name="Lamp" sprite="/sprites/cloud.png"/>
          </Link>
          <Link href="/user/kicks">
          <BattleBox name="Kicks" sprite="/sprites/ganondorf.png"/>
          </Link>
        </div>
      </div>

{/* Round of 6 */}
<div className="w-full flex flex-col items-center gap-4 sm:gap-6">
<div className="w-full flex justify-start gap-1 sm:gap-2 overflow-x-auto no-scrollbar px-2 sm:px-0">
  <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex items-center gap-1 sm:gap-2 min-w-[140px]">
    <Link href="/user/ftf">
      <BattleBox name="FTF" sprite="/sprites/ganondorf.png" />
    </Link>
    <Link href="/user/Gebu">
      <BattleBox name="Gebu" sprite="/sprites/mega_man.png" />
    </Link>
  </div>
  <div className="border-2 border-blue-500 bg-gray-700  p-3 rounded-xl flex items-center gap-1 sm:gap-2 min-w-[140px]">
    <Link href="/user/lamp">
      <BattleBox name="Lamp" sprite="/sprites/toon_link.png" />
    </Link>
    <Link href="/user/A3G">
      <BattleBox name="A3G" sprite="/sprites/samus.png" />
    </Link>
  </div>
</div>


  {/* BYE box below */}
  <div className="w-full flex justify-center">
    <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex items-center gap-2 sm:gap-4 min-w-[180px] max-w-[420px]">
      *BYE*
      <Link href="/user/UNK">
        <BattleBox name="UNK" sprite="/sprites/yoshi.png" />
      </Link>
      <Link href="/user/kicks">
        <BattleBox name="Kicks" sprite="/sprites/dark_pit.png" />
      </Link>
    </div>
  </div>
</div>
    </div>
  );
}
