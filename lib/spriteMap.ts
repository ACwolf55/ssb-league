import { players } from "@/data/players";

export const spriteMap: Record<string, string> = players.reduce(
  (acc, player) => {
    acc[player.name.toLowerCase()] = player.icon;
    return acc;
  },
  {} as Record<string, string>
);

export function getPlayerSprite(playerName: string): string {
  return spriteMap[playerName.toLowerCase()] || "/player-icons/default.png";
}
