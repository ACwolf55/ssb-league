import React from 'react'

function News() {
  const text = " \u25BC Next Tournament \u25BC :   Salt Summer 2025 - August 30th! \u25BC  in Lockport \u25BC";

   return (
    <div className=" mx-auto w-full overflow-hidden whitespace-nowrap bg-white text-black py-4 px-6 border-8 border-gray-900 rounded-lg shadow-lg font-pressStart">
      <div
        className="inline-block animate-scroll"
        style={{ animationDuration: `30s` }}
      >
        {text} &nbsp; {text}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          animation-play-state: running;
          will-change: transform;
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .font-pressStart {
          font-family: 'Press Start 2P', cursive;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

export default News