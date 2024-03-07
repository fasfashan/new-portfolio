import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Scoreboard() {
  const [scores, setScores] = useState({
    Mahruz: 2,
    Valen: 2,
    Trisna: 2,
    Septo: 1,
    Awal: 1,
    Fasha: 1,
    Farhan: 2,
    Yusron: 0,
    Saroel: 1,
    Roki: 2,
  });

  const handleScoreChange = (player, amount) => {
    setScores((prevScores) => {
      const newScore = prevScores[player] + amount;
      // Set skor maksimal 2
      const updatedScore = Math.min(Math.max(newScore, 0), 2);
      return {
        ...prevScores,
        [player]: updatedScore,
      };
    });
  };

  const matchups = [
    { player1: "Valen", player2: "Septo" },
    { player1: "Trisna", player2: "Saroel" },
    { player1: "Farhan", player2: "Yusron" },
    { player1: "Awal", player2: "Mahruz" },
    { player1: "Roki", player2: "Fasha" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-center items-center flex-col space-y-2">
        <h2 className="text-center font-semibold">Day 4</h2>
        <p className="text-gray-600 text-sm font-medium text-center">
          Best of 3
        </p>
        <div className="bg-green-500 w-fit p-1 text-white font-semibold text-xs text-center">
          Done
        </div>
      </div>
      {matchups.map(({ player1, player2 }, index) => (
        <div
          key={index}
          className="p-4 shadow-sm rounded-lg border border-gray-200"
        >
          <div className="grid text-sm  md:grid-cols-3 items-center">
            <span className="font-medium">{player1}</span>
            <div className="text-sm p-1  bg-cyan-200 gap-4 rounded-md flex justify-center items-center">
              <div className=" ">{scores[player1]}</div> -
              <div className=" ">{scores[player2]}</div>
            </div>
            <span className="text-right font-medium">{player2}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scoreboard;
