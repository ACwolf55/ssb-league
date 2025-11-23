import React from 'react';

export default function PrevPodiums() {
  const tournaments = [
    {
      name: "UNCLE KICKS #1",
      players: [
        { name: "Gebu", place: "🥇", color: "text-yellow-400" },
        { name: "FTF", place: "🥈", color: "text-gray-300" },
        { name: "AC-Just-A-Thang-Baby", place: "🥉", color: "text-orange-400" }
      ]
    },
    {
      name: "Salt #2",
      players: [
        { name: "UNK", place: "🥇", color: "text-yellow-400" },
        { name: "Kicks", place: "🥈", color: "text-gray-300" },
        { name: "Gebu", place: "🥉", color: "text-orange-400" }
      ]
    },
    {
      name: "Gebu #2",
      players: [
        { name: "Gebu", place: "🥇", color: "text-yellow-400" },
        { name: "AC-Just-A-Thang-Baby", place: "🥈", color: "text-gray-300" },
        { name: "UNK", place: "🥉", color: "text-orange-400" }
      ]
    },
    {
      name: "Gebu #1",
      players: [
        { name: "FTF", place: "🥇", color: "text-yellow-400" },
        { name: "Gebu", place: "🥈", color: "text-gray-300" },
        { name: "AC-Just-A-Thang-Baby", place: "🥉", color: "text-orange-400" }
      ]
    },
    {
      name: "Salt #1",
      players: [
        { name: "AC-Just-A-Thang-Baby", place: "🥇", color: "text-yellow-400" },
        { name: "UNK", place: "🥈", color: "text-gray-300" },
        { name: "FTF / Gebu / Lamp", place: "?", color: "text-gray-400" }
      ]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
        🏆 Tournament Champions 🏆
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center border-b-2 border-gray-600 pb-2">
              {tournament.name}
            </h3>
            
            <div className="space-y-3">
              {tournament.players.map((player, playerIdx) => (
                <div
                  key={playerIdx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    playerIdx === 0 ? 'bg-yellow-900/30' : 
                    playerIdx === 1 ? 'bg-gray-700/50' : 
                    'bg-orange-900/20'
                  }`}
                >
                  <span className="text-3xl">{player.place}</span>
                  <span className={`font-bold text-lg ${player.color}`}>
                    {player.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Total Tournaments: {tournaments.length}
        </p>
      </div>
    </div>
  );
}