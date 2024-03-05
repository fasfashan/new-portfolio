/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import data from "@/app/data/league.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Page() {
  // Lakukan pengurutan data berdasarkan poin secara menurun dan jumlah kemenangan secara menurun
  const sortedData = [...data].sort((a, b) => {
    // Jika poin sama, prioritas diberikan kepada jumlah kemenangan
    if (a.point === b.point) {
      return b.wins - a.wins; // Urutkan berdasarkan jumlah kemenangan menurun
    }
    return b.point - a.point; // Urutkan berdasarkan poin menurun
  });
  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Point
              </th>
              <th scope="col" className="px-6 py-3">
                Wins
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index === 0 ? "text-sm font-semibold text-black" : ""
                } ${
                  index % 2 === 0 && index < 8
                    ? "bg-gray-300"
                    : index % 2 === 1 && index < 8
                    ? "bg-gray-200"
                    : ""
                } ${
                  index === 7 || index === 8 || index === 9
                    ? "bg-red-400 text-black border-b border-white"
                    : ""
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index === 0 ? (
                    "1. 🏆"
                  ) : index === 1 ? (
                    "2. 🥈"
                  ) : index === 2 ? (
                    "3. 🥉"
                  ) : (
                    <>
                      {index === 7 || index === 8 ? (
                        <>
                          {index + 1}.{" "}
                          <span className="bg-yellow-600 rounded-lg text-white border border-red-800 text-xs p-1">
                            Kalah mulu 🏳️‍🌈🏳️‍⚧️
                          </span>
                        </>
                      ) : (
                        <>
                          {index === 9 ? (
                            <>
                              {index + 1}.{" "}
                              <span className="bg-yellow-500 rounded-lg text-white border border-red-800 text-xs p-1">
                                Pensiun aja Mas 🏳️‍🌈🏳️‍⚧️
                              </span>
                            </>
                          ) : (
                            <span>{index + 1}.</span>
                          )}
                        </>
                      )}
                    </>
                  )}
                </th>
                <td className="px-6 py-4 gap-4 flex items-center">
                  <Image
                    className="rounded-full"
                    src={item.image}
                    width={32}
                    height={32}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </td>
                <td className="px-6 py-4">{item.point}</td>
                <td className="px-6 py-4">{item.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
