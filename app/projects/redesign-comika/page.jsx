import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Projects
        project_name={"Redesign Comika Website"}
        project_desc="This design is the result of my exploration. I enjoy visiting new websites and making some changes both in terms of design and function."
        client_name={"-"}
        turnaround={"3 Days"}
        team={"Only Me"}
        images={["/comika.png", "/comika_2.png"]}
      />
    </>
  );
}
