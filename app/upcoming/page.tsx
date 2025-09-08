"use client";

import React from "react";
import Header from "@/components/Header";

import Link from "next/link";

const event = {
  title: "-PENDING-`",
  date: "? Oct. 24th ?",
  time: "?",
  location: "?",
  participants: [
    { name: "UNK", odds: "" },
   { name: "Kicks", odds: "" },
   { name: "Gebu", odds: "" },
   { name: "FTF", odds: "" },
   { name: "ACJATB", odds: "" },
   { name: "Lamp", odds: "" },
   { name: "DOG", odds: "" },
   { name: "Ty", odds: "" },
   { name: "A3G", odds: "" },
   
  ],
  maybeParticipating: [
     { name: "CheatCode", odds: "" },
  ],
  rules: [
    "Shirts Optional",
    
  ],
};

export default function Upcoming() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <Header />

      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-6">
        <h1 className="text-4xl font-bold text-center mb-6">{event.title}</h1>

        <div className="flex justify-center space-x-10 text-lg mb-6">
          <div>
            <p className="text-gray-400 uppercase tracking-wide text-sm">
              Date
            </p>
            <p>{event.date}</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-wide text-sm">
              Time
            </p>
            <p>{event.time}</p>
          </div>
        </div>

        <div className="flex justify-center space-x-10 text-lg mb-6">
          <div>
            <p className="text-gray-400 uppercase tracking-wide text-sm">
              Location
            </p>
            <p>{event.location}</p>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-10 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Rules</h2>
          <ul className="list-disc list-inside space-y-2 max-w-xl mx-auto text-gray-300">
            {event.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>



        {/* Participants and Odds */}
        <div className="mb-2 mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Participants & Winning Odds
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {event.participants.map(({ name, odds }, idx) => (
              <li key={idx}>
                <Link
                  href={`/user/${encodeURIComponent(name.toLowerCase())}`}
                  className="block bg-gray-700 rounded-lg p-4 shadow-md flex flex-col items-center hover:bg-yellow-400 hover:text-black transition"
                >
                  <span className="text-xl font-bold">{name}</span>
                  <p className="text-yellow-400 font-semibold mt-1">
                    Odds: {odds}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Maybe Participating and Odds */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            ? Maybe Participating ? & Winning Odds
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {event.maybeParticipating.map(({ name, odds }, idx) => (
              <li key={idx}>
                <Link
                  href={`/user/${encodeURIComponent(name.toLowerCase())}`}
                  className="block bg-gray-700 rounded-lg p-4 shadow-md flex flex-col items-center hover:bg-yellow-400 hover:text-black transition"
                >
                  <span className="text-xl font-bold">{name}</span>
                  <p className="text-yellow-400 font-semibold mt-1">
                    Odds: {odds}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
