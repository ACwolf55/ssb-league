import React from "react";

export default function BattleBox({
  name,
  sprite,
}: {
  name: string;
  sprite: string;
}) {
  return (
    <div
      className={`
        bg-white text-black rounded-md
        w-[16vw] sm:w-20 md:w-28 lg:w-32
        min-w-[58px] max-w-[126px]
        py-1.5 px-1.5
        shadow text-center
        text-[9px] sm:text-xs md:text-sm
        border border-gray-300
        flex flex-col items-center justify-center
        whitespace-normal break-words
        flex-shrink-0
      `}
    >
      <img
        src={sprite}
        alt={`${name} sprite`}
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-1"
      />
      <span className="px-1">{name}</span>
    </div>
  );
}
