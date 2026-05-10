"use client";

import React from "react";

export default function FunHouse2025() {
  return (
    <div className="flex flex-col items-center w-full p-6 bg-slate-950 min-h-screen">
      <header className="bg-slate-200 text-slate-950 text-xl sm:text-3xl font-extrabold rounded-3xl text-center w-full max-w-6xl py-4 mb-8 shadow-lg">
        UNCLE KICKS FunHouse 2025
      </header>

      <div className="w-full max-w-5xl rounded-[32px] border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-6 rounded-3xl bg-slate-800 px-5 py-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Tournament Bracket</p>
          <p className="mt-2 text-2xl font-bold text-white">Under Construction</p>
        </div>

        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 p-4">
          <img
            src="/tournament brackets/FunhouseBracketsImg.png"
            alt="FunHouse tournament bracket"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
