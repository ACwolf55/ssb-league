// components/BattleBox.tsx
import React from "react";

export default function BattleBox({ name }: { name: string }) {
  return (
    <div
      className={`
        bg-white text-black rounded-md
        w-[18vw] sm:w-20 md:w-28 lg:w-32
        min-w-[64px] max-w-[140px]
        py-2 px-2
        shadow text-center
        text-[10px] sm:text-xs md:text-sm
        border border-gray-300
        flex items-center justify-center
        whitespace-normal break-words
      `}
    >
      <span className="px-1">{name}</span>
    </div>
  );
}
