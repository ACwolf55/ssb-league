"use client";

import React from "react";
import type { MatchComponentProps } from "@g-loot/react-tournament-brackets";

const spriteMap: Record<string, string> = {
  unk: "/sprites/donkey_kong.png",
  kicks: "/sprites/wii_fit_trainer.png",
  gebu: "/sprites/piranha_plant.png",
  ftf: "/sprites/ganondorf.png",
  lamp: "/sprites/cloud.png",
  a3g: "/sprites/samus.png",
  dog: "/sprites/king_dedede.png",
};

export default function TournamentMatch({
  topParty,
  bottomParty,
  topWon,
  bottomWon,
  topHovered,
  bottomHovered,
  topText,
  bottomText,
  onPartyClick,
  onMouseEnter,
  onMouseLeave,
}: MatchComponentProps) {
  const getSprite = (name?: string) => spriteMap[name?.toLowerCase() || ""] || "/sprites/donkey_kong.png";

  return (
    <div
      className="flex flex-col gap-0.5 bg-gray-700 p-0.5 rounded-lg border-2 border-gray-600 w-40"
      onMouseLeave={onMouseLeave}
    >
      {/* Top participant */}
      {topParty && (
        <div
          className={`flex flex-col items-center cursor-pointer transition ${
            topWon ? "opacity-100" : "opacity-60"
          } ${topHovered ? "bg-gray-600" : ""} p-0.5 rounded`}
          onClick={() => onPartyClick(topParty, topWon)}
          onMouseEnter={() => onMouseEnter(topParty.id)}
        >
          <img src={getSprite(topParty.name)} alt={topParty.name} className="w-8 h-8 object-contain mb-0.5" />
          <span className="text-[10px] font-bold text-center break-words leading-tight">{topParty.name || "?"}</span>
          <span
            className={`text-[9px] font-bold ${
              topWon ? "text-green-400" : "text-gray-400"
            }`}
          >
            {topText}
          </span>
        </div>
      )}

      {/* Bottom participant */}
      {bottomParty && (
        <div
          className={`flex flex-col items-center cursor-pointer transition ${
            bottomWon ? "opacity-100" : "opacity-60"
          } ${bottomHovered ? "bg-gray-600" : ""} p-0.5 rounded`}
          onClick={() => onPartyClick(bottomParty, bottomWon)}
          onMouseEnter={() => onMouseEnter(bottomParty.id)}
        >
          <img src={getSprite(bottomParty.name)} alt={bottomParty.name} className="w-8 h-8 object-contain mb-0.5" />
          <span className="text-[10px] font-bold text-center break-words leading-tight">{bottomParty.name || "?"}</span>
          <span
            className={`text-[9px] font-bold ${
              bottomWon ? "text-green-400" : "text-gray-400"
            }`}
          >
            {bottomText}
          </span>
        </div>
      )}

      {/* Single participant (bye/walkover) */}
      {!bottomParty && topParty && (
        <div className="text-center text-[9px] text-yellow-400 font-bold py-1">
          {topText === "BYE" ? "BYE" : "WALKOVER"}
        </div>
      )}
    </div>
  );
}
