import React from "react";

function News() {
  const text =
    " \u25BC Next Tournament \u25BC : Pending ! - October ? \u25BC :O Spooky ? \u25BC";

  return (
    <div className="mx-auto w-full max-w-full overflow-hidden whitespace-nowrap bg-white text-black py-2 px-4 sm:py-4 sm:px-6 border-8 border-gray-900 rounded-lg shadow-lg font-pressStart">
      <div
        className="inline-block animate-scroll"
        style={{ animationDuration: `30s` }}
      >
        {text} &nbsp; {text}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%); /* start off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* move off-screen to the left */
          }
        }

        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: none;
          animation-play-state: running;
          will-change: transform;
          white-space: nowrap;
        }
      `}</style>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
        .font-pressStart {
          font-family: "Press Start 2P", cursive;
          font-weight: 400;
          font-size: 0.8rem;
        }
        @media (min-width: 640px) {
          .font-pressStart {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}

export default News;
