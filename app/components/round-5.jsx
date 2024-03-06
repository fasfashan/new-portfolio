import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Scoreboard() {
  const [scores, setScores] = useState({
    Mahruz: 0,
    Valen: 0,
    Trisna: 0,
    Septo: 0,
    Awal: 0,
    Fasha: 0,
    Farhan: 0,
    Yusron: 0,
    Saroel: 0,
    Roki: 0,
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
    { player1: "Awal", player2: "Saroel" },
    { player1: "Fasha", player2: "Mahruz" },
    { player1: "Trisna", player2: "Farhan" },
    { player1: "Roki", player2: "Valen" },
    { player1: "Septo", player2: "Yusron" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-center items-center flex-col space-y-2">
        <h2 className="text-center font-semibold">Day 5</h2>
        <p className="text-gray-600 text-sm font-medium text-center">
          Best of 3
        </p>
        <div className="bg-yellow-500 w-fit p-1 text-white font-semibold text-xs text-center">
          Upcoming
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
