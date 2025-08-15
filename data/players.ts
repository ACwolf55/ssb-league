export type Player = {
  name: string;
  fullName?: string; // Optional for display purposes
  icon: string;
  tierRank: string;
  mains: string[];
  highestPlacement: string;
  championships: number;
  podiums: number;
  change: number; // Positive or negative change in tier rank
  changeComments: string; // Explanation for the change
  otherStats: string;
};

export const players: Player[] = [
  {
    name: "ACJATB",
    fullName: 'AC "Just A Thang Baby"',
    icon: "/player-icons/acjatb3.png",
    tierRank: "A",
    mains: [
      "Zelda",
      "Pikachu",
      "Palutena",
      "Link",
      "Dark Pit",
      "Pit",
      "Byleth",
      "Kirby",
      "Pyra",
      "Peach",
    ],
    highestPlacement: "1st at Salt Spring 2025",
    championships: 1,
    podiums: 3,
    change: 0,
    changeComments: "",
    otherStats:"like idk what else we should have, but lets get more lol"
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
      "Zelda",
      "Joker",
      "Toon Link",
      "Palutena",
      "Ridley",
      "Lucina",
      "Zero Suit Samus",
    ],
    highestPlacement: "1st at Gebu 1",
    championships: 1,
    podiums: 1,
      change: 0,
    changeComments: "",
    otherStats:"like idk what else we should have, but lets get more lol"
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
      "Robin"
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
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
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
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
    podiums: 2,
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
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
      change: 0,
    changeComments: "",
    otherStats:"like idk what else we should have, but lets get more lol"
  },
  {
    name: "DOG",
     icon: "/player-icons/dog1.png",
    tierRank: "C",
    mains: [
      "King Dedede",
    
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
  },
   {
    name: "pippers",
     icon: "/player-icons/default.png",
    tierRank: "D",
    mains: [
      "Lucina",
   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
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
      change: 0,
    changeComments: "",
     otherStats:"like idk what else we should have, but lets get more lol"
  },
  {
    name: "Kicks",
     icon: "/player-icons/kicks2.png",
    tierRank: "C",
    mains: [
      "Samus",
      "Wii Fit Trainer",
      "Ganondorf",
      "Rob",

   
    ],
    highestPlacement: "-",
    championships: 0,
    podiums: 0,
      change: 0,
    changeComments: "",
   otherStats:"like idk what else we should have, but lets get more lol"
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
      change: 0,
    changeComments: "",
    otherStats:"like idk what else we should have, but lets get more lol"
  },
];
