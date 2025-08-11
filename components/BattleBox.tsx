import React from "react";

export default function BattleBox({
  name,
  sprite,
}: {
  name: string;
  sprite: string;
}) {

console.log("Rendering BattleBox for:", name, "with sprite:", sprite);

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
        flex flex-col items-center justify-center
        whitespace-normal break-words
      `}
    >
      <img
        src={sprite}
        alt={`${name} sprite`}
        className="w-12 h-12 object-contain mb-1"
      />
      <span className="px-1">{name}</span>
    </div>
  );
}
