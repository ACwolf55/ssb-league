import { players } from "@/data/players";

type Props = {
  params: { user: string };
};

export default function PlayerPage({ params }: Props) {
  const player = players.find(
    (p) => p.name.toLowerCase() === params.user.toLowerCase()
  );

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Player not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      {/* Player Name & Tier */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
        <h1 className="text-3xl font-bold">{player.name}</h1>
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
          <p className="text-sm text-gray-400">Podium Finishes</p>
          <p className="text-lg font-semibold">{player.podiums}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">Total KOs</p>
          <p className="text-lg font-semibold">{player.totalKOs}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-400">3-Stocks</p>
          <p className="text-lg font-semibold">{player.threeStocks}</p>
        </div>
      </div>

      {/* Top 10 Mains */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 mt-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Top 10 Mains</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {player.mains.map((main, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-2 text-center text-sm font-medium flex flex-col items-center"
            >
              <span className="text-xs text-gray-300 mb-1">#{index + 1}</span>
              {main}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
