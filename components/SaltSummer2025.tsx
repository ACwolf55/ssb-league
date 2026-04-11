"use client";

import React from "react";
import {
  SingleEliminationBracket,
  createTheme,
} from "@g-loot/react-tournament-brackets";
import type { MatchType } from "@g-loot/react-tournament-brackets";
import TournamentMatch from "./TournamentMatch";

const ssbTheme = createTheme({
  textColor: {
    main: "#ffffff",
    highlighted: "#fbbf24",
    dark: "#9ca3af",
    disabled: "#4b5563",
  },
  matchBackground: { wonColor: "#1e3a5f", lostColor: "#1f2937" },
  score: {
    background: { wonColor: "#1d4ed8", lostColor: "#374151" },
    text: {
      highlightedWonColor: "#fbbf24",
      highlightedLostColor: "#6b7280",
    },
  },
  border: { color: "#374151", highlightedColor: "#fbbf24" },
  roundHeaders: { background: "#111827" },
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
  transitionTimingFunction: "ease",
  disabledColor: "#4b5563",
  canvasBackground: "#111827",
});

const matches: MatchType[] = [
  {
    id: 1,
    name: "Grand Final",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "unk", name: "UNK", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "kicks", name: "Kicks", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  {
    id: 2,
    name: "Semi Final 1",
    nextMatchId: 1,
    tournamentRoundText: "Semis",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "unk-s", name: "UNK", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "gebu-s", name: "Gebu", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  {
    id: 3,
    name: "Semi Final 2",
    nextMatchId: 1,
    tournamentRoundText: "Semis",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "lamp-s", name: "Lamp", isWinner: false, resultText: "0", status: "PLAYED" },
      { id: "kicks-s", name: "Kicks", isWinner: true, resultText: "1", status: "PLAYED" },
    ],
  },
  {
    id: 4,
    name: "Round 1 - Match 1",
    nextMatchId: 2,
    tournamentRoundText: "Round 1",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "ftf", name: "FTF", isWinner: false, resultText: "0", status: "PLAYED" },
      { id: "gebu", name: "Gebu", isWinner: true, resultText: "1", status: "PLAYED" },
    ],
  },
  {
    id: 5,
    name: "Round 1 - Match 2",
    nextMatchId: 3,
    tournamentRoundText: "Round 1",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "lamp", name: "Lamp", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "a3g", name: "A3G", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  {
    id: 6,
    name: "Round 1 - UNK Bye",
    nextMatchId: 2,
    tournamentRoundText: "Round 1",
    startTime: "2025",
    state: "WALK_OVER",
    participants: [
      { id: "unk-bye", name: "UNK", isWinner: true, resultText: "BYE", status: "WALK_OVER" },
    ],
  },
  {
    id: 7,
    name: "Round 1 - Kicks Bye",
    nextMatchId: 3,
    tournamentRoundText: "Round 1",
    startTime: "2025",
    state: "WALK_OVER",
    participants: [
      { id: "kicks-bye", name: "Kicks", isWinner: true, resultText: "BYE", status: "WALK_OVER" },
    ],
  },
];

export default function SaltSummer2025() {
  return (
    <div className="flex flex-col items-center w-full mt-8 bg-gray-900 rounded-xl p-4">
      <header className="bg-gray-200 text-black text-xl sm:text-3xl font-extrabold rounded-lg text-center w-full py-2 mb-6">
        Salt Summer 2025
      </header>
      <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: "600px" }}>
        <SingleEliminationBracket
          matches={matches}
          matchComponent={TournamentMatch}
          theme={ssbTheme}
          options={{
            style: {
              roundHeader: {
                isShown: true,
                backgroundColor: "#111827",
                fontColor: "#ffffff",
                fontSize: 12,
              },
              connectorColor: "#6b7280",
              connectorColorHighlight: "#fbbf24",
              width: 180,
              boxHeight: 80,
              spaceBetweenColumns: 50,
              spaceBetweenRows: 20,
            },
          }}
        />
      </div>
    </div>
  );
}
