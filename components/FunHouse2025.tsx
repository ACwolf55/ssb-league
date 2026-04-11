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
  // Grand Finals
  {
    id: 1,
    name: "Grand Final",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "gebu-gf", name: "Gebu", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "ftf-gf", name: "FTF", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  // Semifinals
  {
    id: 2,
    name: "Semi Final 1",
    nextMatchId: 1,
    tournamentRoundText: "Semis",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "gebu-sf1", name: "Gebu", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "ac-sf1", name: "AC", isWinner: false, resultText: "0", status: "PLAYED" },
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
      { id: "ftf-sf2", name: "FTF", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "uncle-sf2", name: "Uncle", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  // Quarterfinals
  {
    id: 4,
    name: "QF 1",
    nextMatchId: 2,
    tournamentRoundText: "QF",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "gebu-qf", name: "Gebu", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "dog-qf", name: "Dog", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  {
    id: 5,
    name: "QF 2",
    nextMatchId: 3,
    tournamentRoundText: "QF",
    startTime: "2025",
    state: "SCORE_DONE",
    participants: [
      { id: "ftf-qf", name: "FTF", isWinner: true, resultText: "1", status: "PLAYED" },
      { id: "kicks-qf", name: "Kicks", isWinner: false, resultText: "0", status: "PLAYED" },
    ],
  },
  {
    id: 6,
    name: "QF 3",
    nextMatchId: 2,
    tournamentRoundText: "QF",
    startTime: "2025",
    state: "WALK_OVER",
    participants: [
      { id: "ac-bye", name: "AC", isWinner: true, resultText: "BYE", status: "WALK_OVER" },
    ],
  },
  {
    id: 7,
    name: "QF 4",
    nextMatchId: 3,
    tournamentRoundText: "QF",
    startTime: "2025",
    state: "WALK_OVER",
    participants: [
      { id: "uncle-bye", name: "Uncle", isWinner: true, resultText: "BYE", status: "WALK_OVER" },
    ],
  },
];

export default function FunHouse2025() {
  return (
    <div className="flex flex-col items-center w-full mt-8 bg-gray-900 rounded-xl p-4">
      <header className="bg-gray-200 text-black text-xl sm:text-3xl font-extrabold rounded-lg text-center w-full py-2 mb-6">
        UNCLE KICKS FunHouse 2025
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
