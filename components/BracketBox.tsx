import React from "react";


export default function BattleBox({ name }: { name: string }): JSX.Element {

  return (
    <div className="bg-white text-black rounded-md h-30 w-30 px p-2 shadow text-center text-sm border border-gray-300">
      {name}
    </div>
  );
}