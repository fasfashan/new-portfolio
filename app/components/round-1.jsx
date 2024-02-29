import React, { useState, useEffect } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
function Scoreboard() {
  const [scores, setScores] = useState(() => {
    const storedScores = localStorage.getItem("scores");
    return storedScores
      ? JSON.parse(storedScores)
      : {
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
        };
  });

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

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
    { player1: "Roki", player2: "Mahruz" },
    { player1: "Valen", player2: "Fasha" },
    { player1: "Trisna", player2: "Septo" },
    { player1: "Awal", player2: "Farhan" },
    { player1: "Yusron", player2: "Saroel" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-center font-semibold">Day 1</h2>
        <p className="text-gray-600 text-sm font-medium text-center">
          Best of 3
        </p>
      </div>
      {matchups.map(({ player1, player2 }, index) => (
        <div
          key={index}
          className="p-4 shadow-sm rounded-lg border border-gray-200"
        >
          <div className="grid text-sm mb-4 md:grid-cols-3 items-center">
            <span className="font-medium">{player1}</span>
            <div className="text-sm p-1  bg-cyan-200 gap-4 rounded-md flex justify-center items-center">
              <div className=" ">{scores[player1]}</div> -
              <div className=" ">{scores[player2]}</div>
            </div>
            <span className="text-right font-medium">{player2}</span>
            <div className="  items-center flex justify-between items-center  col-span-3">
              <div className="flex gap-2">
                <button
                  className=" bg-cyan-500 hover:bg-cyan-700 text-white font-bold p-1 rounded"
                  onClick={() => handleScoreChange(player1, 1)}
                >
                  <PlusIcon />
                </button>
                <button
                  className=" bg-cyan-500 hover:bg-cyan-700 text-white font-bold p-1 rounded"
                  onClick={() => handleScoreChange(player1, -1)}
                >
                  <MinusIcon />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  className=" bg-cyan-500 hover:bg-cyan-700 text-white font-bold p-1 rounded"
                  onClick={() => handleScoreChange(player2, 1)}
                >
                  <PlusIcon />
                </button>
                <button
                  className=" bg-cyan-500 hover:bg-cyan-700 text-white font-bold p-1 rounded"
                  onClick={() => handleScoreChange(player2, -1)}
                >
                  <MinusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scoreboard;
