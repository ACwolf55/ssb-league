"use client";

import React from 'react'
import Link from "next/link";

export default function Header() {

  return (
    <Link href="/">
    <header 
      className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-lg text-center mb-5"
    >
      SSB LEAGUE
    </header>
    </Link>
  );
}

