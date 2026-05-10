"use client";

import Link from "next/link";
import React from "react";

export default function SaltSummer2025() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-slate-900 text-white py-10">
      <header className="bg-slate-200 text-slate-900 text-xl sm:text-3xl font-extrabold rounded-3xl text-center w-full max-w-6xl py-4 mb-8 shadow-lg">
        Salt Summer 2025
      </header>

      <div className="w-full overflow-x-auto px-4">
        <div className="min-w-[1260px] grid grid-cols-[280px_280px_280px_280px] gap-x-8">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">FTF vs Gebu</div>
              <Link href="/user/ftf" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/ganondorf.png" alt="FTF" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">FTF</div>
                  <div className="text-[10px] text-slate-400">Ganondorf</div>
                </div>
              </Link>
              <Link href="/user/gebu" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-slate-700">
                <img src="/sprites/mega_man.png" alt="Gebu" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Gebu</div>
                  <div className="text-[10px] text-slate-400">Mega Man</div>
                </div>
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">Lamp vs A3G</div>
              <Link href="/user/lamp" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/toon_link.png" alt="Lamp" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Lamp</div>
                  <div className="text-[10px] text-slate-400">Toon Link</div>
                </div>
              </Link>
              <Link href="/user/a3g" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-slate-700">
                <img src="/sprites/samus.png" alt="A3G" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">A3G</div>
                  <div className="text-[10px] text-slate-400">Samus</div>
                </div>
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">Bye pass</div>
              <div className="grid gap-3">
                <Link href="/user/unk" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                  <img src="/sprites/yoshi.png" alt="UNK" className="w-10 h-10 rounded-full object-contain" />
                  <div>
                    <div className="font-semibold text-white">UNK</div>
                    <div className="text-[10px] text-slate-400">Yoshi</div>
                  </div>
                </Link>
                <Link href="/user/kicks" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                  <img src="/sprites/dark_pit.png" alt="Kicks" className="w-10 h-10 rounded-full object-contain" />
                  <div>
                    <div className="font-semibold text-white">Kicks</div>
                    <div className="text-[10px] text-slate-400">Bye</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-14 pt-10">
            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">Gebu vs UNK</div>
              <Link href="/user/gebu" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/piranha_plant.png" alt="Gebu" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Gebu</div>
                  <div className="text-[10px] text-slate-400">Piranha Plant</div>
                </div>
              </Link>
              <Link href="/user/unk" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-slate-700">
                <img src="/sprites/samus.png" alt="UNK" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">UNK</div>
                  <div className="text-[10px] text-slate-400">Samus</div>
                </div>
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">Lamp vs Kicks</div>
              <Link href="/user/lamp" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/cloud.png" alt="Lamp" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Lamp</div>
                  <div className="text-[10px] text-slate-400">Cloud</div>
                </div>
              </Link>
              <Link href="/user/kicks" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-slate-700">
                <img src="/sprites/ganondorf.png" alt="Kicks" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Kicks</div>
                  <div className="text-[10px] text-slate-400">Ganondorf</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-32 pt-24">
            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3">Final</div>
              <Link href="/user/unk" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/donkey_kong.png" alt="UNK" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">UNK</div>
                  <div className="text-[10px] text-slate-400">Donkey Kong</div>
                </div>
              </Link>
              <Link href="/user/kicks" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-slate-700">
                <img src="/sprites/wii_fit_trainer.png" alt="Kicks" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">Kicks</div>
                  <div className="text-[10px] text-slate-400">Wii Fit Trainer</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-40 pt-32">
            <div className="rounded-3xl border border-yellow-400 bg-slate-900 p-4 shadow-2xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-yellow-300 mb-3">Winner</div>
              <Link href="/user/unk" className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 transition hover:bg-slate-700">
                <img src="/sprites/donkey_kong.png" alt="UNK" className="w-10 h-10 rounded-full object-contain" />
                <div>
                  <div className="font-semibold text-white">UNK</div>
                  <div className="text-[10px] text-slate-400">Donkey Kong</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
