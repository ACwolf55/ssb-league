"use client";

import React from "react";
import { players } from "@/data/players";
import { useParams } from "next/navigation";
import Header from "@/components/Header";

export default function UserPage() {
  const params = useParams();
  const user = Array.isArray(params.id) ? params.id[0] : params.id;
  console.log(params, user);
  const player = players.find(
    (p) => p.name.toLowerCase() === user?.toLowerCase()
  );
  console.log(player);
  if (!player) return <div>Player not found</div>;

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Header />
        <h1 className="text-2xl font-bold">Player not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <Header />
      {/* Player Name & Tier */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
        <h1 className="text-3xl font-bold">{player.fullName || player.name}</h1>
<div
  className="w-28 h-28 mx-auto my-4 rounded-full
  bg-gradient-to-br from-gray-300 via-yellow-300 to-yellow-500
  border-4 border-white
  flex items-center justify-center overflow-hidden"
>
  <img
    src={player.icon}
    alt="Player icon"
    className="w-5/6 h-5/6 object-cover" 
    onError={(e) => {
      e.currentTarget.src = "/player-icons/default.png";
    }}
  />
</div>



        <p className="text-xl mt-2">
          Tier Rank:{" "}
          <span className="font-bold text-yellow-400">{player.tierRank}</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">Highest Placement</p>
          <p className="text-lg font-semibold">{player.highestPlacement}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">Championships</p>
          <p className="text-lg font-semibold">{player.championships}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">Podium Finishes</p>
          <p className="text-lg font-semibold">{player.podiums}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">? other stats:?</p>
          <p className="text-lg font-semibold">{player.otherStats}</p>
        </div>
      </div>

      {/* Top 10 Mains */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 mt-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Mains</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {player.mains.map((main, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-2 text-center text-sm font-medium flex flex-col items-center"
            >
              <span className="text-xs text-gray-300 mb-1">#{index + 1}</span>
              <h3>{main}</h3>
              <img
                src={`/sprites/${main.toLowerCase().replace(/\s+/g, "_")}.png`}
                alt={`${main} sprite`}
                className="w-12 h-12 object-contain mb-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
