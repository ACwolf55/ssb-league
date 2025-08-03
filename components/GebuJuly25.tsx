import React from "react";
import BattleBox from "./BattleBox";

export default function GebuJuly2025() {
  return (
    <div className="flex flex-col items-center space-y-12 mt-12 bg-gray-500">
      <header className="bg-gray-200 text-blue-600 text-3xl font-extrabold">Gebu July 2025</header>

   <div className="flex flex-col justify-center">
    <div className="border-4 border-yellow-400 p-4 text-center bg-gray-700 rounded-xl">
      <h3 className="text-yellow-300 font-bold mb-2">Winner 👑</h3>
      <BattleBox name="Gebu" />
    </div>
  </div>
      {/* Finals: 1 Matchup = 1 BracketBox with 2 players */}
      <div className="flex justify-center w-full max-w-2xl gap-x-8">
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4 bg-gray-700">
          <BattleBox name={"Gebu"} />
          <BattleBox name={"AC Just A Thang Baby"} />
        </div>
      </div>

      {/* Semifinals: 2 Matchups = 2 BracketBoxes with 2 players each */}
      <div className="flex justify-center w-full max-w-5xl gap-x-16">
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4">
          <BattleBox name={"Gebu"} />
          <BattleBox name={"Ty"} />
        </div>
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4">
          <BattleBox name={"AC Just A Thang Baby"} />
          <BattleBox name={"UNK"} />
        </div>
      </div>

      <div className="flex justify-center w-full max-w-5xl gap-x-16">
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4">
          <BattleBox name={"TY"} />
          <BattleBox name={"AC Just A Thang Baby"} />
        </div>
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4">
          <BattleBox name={"FTF"} />
          <BattleBox name={"UNK"} />
        </div>
        <div className="border-4 border-blue-500 bg-gray-700 p-4 rounded-xl flex gap-x-4">
          <BattleBox name={"Gebu"} />
          <BattleBox name={"Lamp"} />
        </div>
      </div>
    </div>
  );
}
