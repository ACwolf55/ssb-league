export type Player = {
  name: string;
  fullName?: string; // Optional for display purposes
  icon: string;
  tierRank: string;
  mains: string[];
  highestPlacement: string;
  championships: number;
  podiums: number;
  totalKOs: number;
  threeStocks: number;
};

export const players: Player[] = [
  {
    name: "ACJATB",
    fullName: 'AC "Just A Thang Baby"',
    icon: "/player-icons/acjatb1.png",
    tierRank: "A",
    mains: [
      "Zelda",
      "Pikachu",
      "Palutena",
      "Link",
      "Dark Pit",
      "Byleth",
      "Kirby",
      "Pyra",
      "Peach",
      "Young Link",
    ],
    highestPlacement: "1st at Salt Spring 2025",
    championships: 1,
    podiums: 2,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "FTF",
    fullName: 'Frank "The Frank" Farinacci',
   icon: "/player-icons/FTF1.svg",
    tierRank: "B",
    mains: [
      "King K Rool",
      "Ganondorf",
      "Bowser",
      "Palutena",
      "Zelda",
      "Joker",
      "Zero Suit Samus",
      "Toon Link",
      "Ridley",
      "Mega Man",
    ],
    highestPlacement: "1st at Gebu 1",
    championships: 1,
    podiums: 1,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "Lamp",
    fullName: "The Lamp",
    icon: "/player-icons/lamp2.png",
    tierRank: "B",
    mains: [
      "Cloud",
      "Sora",
      "Sephiroth",
      "Ganondorf",
      "Mr Game and Watch",
      "Captain Falcon",
      "Toon Link",
      "Kazuya",
      "Hero",
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "Gebu",
     icon: "/player-icons/gebu2.png",
    tierRank: "S",
    mains: [
      "Bowser",
      "Mega Man",
      "Ike",
    ],
    highestPlacement: "1st at Gebu July 2025",
    championships: 1,
    podiums: 2,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "UNK",
     icon: "/player-icons/default.png",
    tierRank: "A",
    mains: [
      "Donkey Kong",
      "Yoshi",
      "Mario",

    ],
    highestPlacement: "2nd at Salt Spring 2025",
    championships: 0,
    podiums: 1,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "TY",
     icon: "/player-icons/ty.png",
    tierRank: "B",
    mains: [
      "Pokemon Trainer",
    
    ],
    highestPlacement: "-",
      championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "Dylan",
    fullName: "Dragon-Badger",
     icon: "/player-icons/dylan2.png",
    tierRank: "C",
    mains: [
      "King Dedede",
    
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
   {
    name: "Mitch",
    fullName: "Sekai Hakaimono",
     icon: "/player-icons/mitch2.png",
    tierRank: "D",
    mains: [
      "Lucina",
   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
   {
    name: "Adrian",
    fullName: "Whirlpool",
     icon: "/player-icons/adrian1.svg",
    tierRank: "C",
    mains: [
      "Link",
   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
  {
    name: "Kiks",

     icon: "/player-icons/kiks1.png",
    tierRank: "C",
    mains: [
      "Ganondorf",
   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
   {
    name: "Dan",
    fullName: "CheatCode",
     icon: "/player-icons/default.png",
    tierRank: "D",
    mains: [
      "Bowser",
      "Little Mac",
   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
    totalKOs: 0,
    threeStocks: 0,
  },
];
