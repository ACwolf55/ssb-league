import React from "react";
import BattleBox from "./BattleBox";
import Link from "next/link";

export default function FunHouse2025() {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8 bg-black w-full px-3 p-8 min-h-screen">
      <header className="bg-gray-200 text-black text-xl sm:text-3xl font-extrabold rounded-lg text-center w-full py-2">
        UNCLE KICKS FunHouse 2025
      </header>

      {/* Container for Winners and Losers brackets */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-12 mt-6">
        
        {/* WINNERS BRACKET - LEFT SIDE */}
        <div className="flex flex-col items-center gap-6 flex-1">
          <h2 className="text-2xl font-bold text-green-400">Winners Bracket</h2>

          <div className="flex gap-6">
            {/* Round 1 - Quarterfinals */}
            <div className="flex flex-col gap-4">
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/Dog"><BattleBox name="Dog" sprite="/sprites/dog.png" /></Link>
                <Link href="/user/Travis"><BattleBox name="Travis" sprite="/sprites/travis.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
                <Link href="/user/Kicks"><BattleBox name="Kicks" sprite="/sprites/kicks.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/Uncle"><BattleBox name="Uncle" sprite="/sprites/uncle.png" /></Link>
                <Link href="/user/A3D"><BattleBox name="A3D" sprite="/sprites/a3d.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/AC"><BattleBox name="AC" sprite="/sprites/ac.png" /></Link>
                <Link href="/user/Lamp"><BattleBox name="Lamp" sprite="/sprites/lamp.png" /></Link>
              </div>
            </div>

            {/* Round 2 - Semifinals */}
            <div className="flex flex-col gap-16 justify-center">
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
                <Link href="/user/Dog"><BattleBox name="Dog" sprite="/sprites/dog.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/Uncle"><BattleBox name="Uncle" sprite="/sprites/uncle.png" /></Link>
                <Link href="/user/AC"><BattleBox name="AC" sprite="/sprites/zelda.png" /></Link>
              </div>
            </div>

            {/* Round 3 - Winners Finals */}
            <div className="flex flex-col justify-center">
              <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex flex-col gap-2">
                <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
                <Link href="/user/AC"><BattleBox name="AC" sprite="/sprites/zelda.png" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* LOSERS BRACKET - MIDDLE */}
        <div className="flex flex-col items-center gap-6 flex-1">
          <h2 className="text-2xl font-bold text-red-400">Losers Bracket</h2>

          <div className="flex gap-6">
            {/* Losers Round 1 */}
            <div className="flex flex-col gap-4">
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/Kicks"><BattleBox name="Kicks" sprite="/sprites/kicks.png" /></Link>
                <Link href="/user/Dog"><BattleBox name="Dog" sprite="/sprites/dog.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/DQ"><BattleBox name="DQ" sprite="/sprites/dq.png" /></Link>
                <Link href="/user/Lamp"><BattleBox name="Lamp" sprite="/sprites/lamp.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-2 rounded-xl flex flex-col gap-2">
                <Link href="/user/A3D"><BattleBox name="A3D" sprite="/sprites/a3d.png" /></Link>
                <Link href="/user/Travis"><BattleBox name="Travis" sprite="/sprites/travis.png" /></Link>
              </div>
            </div>

            {/* Losers Round 2 */}
            <div className="flex flex-col gap-16 justify-start pt-8">
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/Uncle"><BattleBox name="Uncle" sprite="/sprites/uncle.png" /></Link>
                <Link href="/user/Kicks"><BattleBox name="Kicks" sprite="/sprites/kicks.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/Travis"><BattleBox name="Travis" sprite="/sprites/travis.png" /></Link>
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
              </div>
            </div>

            {/* Losers Round 3 */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/AC"><BattleBox name="AC" sprite="/sprites/ac.png" /></Link>
                <Link href="/user/Kicks"><BattleBox name="Kicks" sprite="/sprites/kicks.png" /></Link>
              </div>
              <div className="border-2 border-blue-500 bg-gray-700 p-3 rounded-xl flex flex-col gap-2">
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
              </div>
            </div>

            {/* Losers Round 4 */}
            <div className="flex flex-col justify-center">
              <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex flex-col gap-2">
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
                <Link href="/user/AC"><BattleBox name="AC" sprite="/sprites/ac.png" /></Link>
              </div>
            </div>

            {/* Losers Finals */}
            <div className="flex flex-col justify-center">
              <div className="border-2 border-blue-500 bg-gray-700 p-4 rounded-xl flex flex-col gap-2">
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Finals & Champion Column */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-yellow-400">Finals</h2>
          
          <div className="flex flex-col gap-6 justify-center h-full">
            {/* Grand Finals */}
            <div className="flex flex-col justify-center">
              <div className="border-2 border-yellow-400 bg-gray-700 p-4 rounded-xl flex flex-col gap-3">
                <Link href="/user/Gebu"><BattleBox name="Gebu" sprite="/sprites/bowser.png" /></Link>
                <Link href="/user/FTF"><BattleBox name="FTF" sprite="/sprites/ftf.png" /></Link>
              </div>
            </div>

            {/* Champion */}
            <div className="flex flex-col justify-center">
              <div className="border-2 flex flex-col items-center border-yellow-400 p-2 text-center bg-gray-700 rounded-xl w-full max-w-[220px]">
                <h3 className="text-yellow-300 font-bold mb-2 text-sm">Winner 👑</h3>
                <Link href="/user/Gebu">
                  <BattleBox name="Gebu" sprite="/sprites/bowser.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}