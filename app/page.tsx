"use client";

import Image from "next/image";
import GebuJuly2025 from "@/components/GebuJuly25";
import TierList from "@/components/TierList";
import News from "@/components/News";

import Link from "next/link";
import SaltSummer2025 from "@/components/SaltSummer2025";


export default function Home() {
  return (
    <div
      className="
        font-sans 
        flex flex-col items-center min-h-screen 
        px-4 sm:px-10 md:px-20 
        pt-8 pb-20 gap-10 
        bg-gray-600
      "
    >
      <header
        className="
          h-[15vh] w-full p-4 
          flex items-center justify-center 
          bg-white text-black 
          text-3xl sm:text-5xl 
          rounded-lg font-extrabold
          gap-4
        "
      >
        <img src="/ssbu.png" alt="SSBU Logo" className="h-12 sm:h-16" />
        <h1>SSB LEAGUE</h1>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center gap-10">
        <News />

        <Link
          href="/upcoming"
          className="
            block w-full sm:max-w-xl
            bg-white text-black text-center 
            text-2xl sm:text-3xl font-extrabold 
            rounded-2xl px-6 py-4 
            hover:bg-gray-500
          "
        >
          👻💀 UNCLE KICK'S FUN HOUSE TOURNAMENT - THIS WEEKEND 💀👻
        </Link>

        <TierList />
        <SaltSummer2025 />
        <GebuJuly2025 />  
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center p-4">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
      </footer>
    </div>
  );
}