"use client";

import React from "react";
import Header from "@/components/Header";

import Link from "next/link";

const event = {
  title: "👻UNCLE KICK'S FUN HOUSE TOURNAMENT - Trick or Treat Halloween Special🍬",
  date: " Oct. 25th",
  time: "3:00 PM EST",
  location: "UNCLE KICK'S FUN HOUSE - Williamsville, NY",
  participants: [
    { name: "UNK", odds: "+100" },
   { name: "Kicks", odds: "+100" },
   { name: "Gebu", odds: "+100" },
   { name: "FTF", odds: "+300" },
   { name: "ACJATB", odds: "+300" },
   { name: "Lamp", odds: "+350" },
   { name: "A3G", odds: "+350" },
   { name: "Ty", odds: "+500" },
   { name: "DOG", odds: "+500" },
   
  ],
  maybeParticipating: [
    { name: "pippers", odds: "+850" },
     { name: "CheatCode", odds: "+♾️" },
  ],
  rules: [
    "Shirts Optional",
    "Food and Beer for everyone!",
    "Seeded bracket - everybody plays everybody once",
    "If Tied Seeds, placement wil be dicussed civily among participants",
    "3 stock (of course)",
    "Best of 3 series in playoffs",
    "Finals & 3rd place match are best of 5",
    "🍬Special Trick or Treat rules for finals🍬",
     {
    title: "Allowed Maps:",
    maps: [
      "Battlefield",
      "Final Destination",
      "Pokemon Stadium 2",
      "Small Battlefield",
      "Smashville",
      "Town and City",
      "Kalos Pokemon League",
      "Hollow Bastion",
      "Yoshi Story",
      "Northern Cave",
      "Fountain of Dreams",
    ]
  }
    
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
      typeof rule === "string" ? (
        <li key={idx}>{rule}</li>
      ) : (
        <li key={idx}>
          <strong className="text-orange-400">{rule.title}</strong>
          <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-gray-400">
            {rule.maps.map((map, mapIdx) => (
              <li key={mapIdx}>{map}</li>
            ))}
          </ul>
        </li>
      )
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
