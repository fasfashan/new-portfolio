"use client";
import Card from "../template/card";
import Data from "@/app/data/data.js";
export default function Gallery() {
  return (
    <>
      <div
        id="selected-work"
        className="grid  md:grid-cols-3 grid-cols-1 gap-10  "
      >
        {Data.map((projectData) => (
          <Card
            key={projectData.project_name} // Don't forget to add a unique key for each mapped element
            project_type={projectData.project_type}
            project_name={projectData.project_name}
            image={projectData.image}
            link={projectData.link}
            alt={projectData.alt}
          />
        ))}
      </div>
    </>
  );
}
