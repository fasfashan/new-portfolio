import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Projects
        project_name={"Journey with Niagahoster."}
        project_desc="Niagahoster created a #journeywithniagahoster landing page competition. Participants must create a landing page using HTML, CSS, and containing articles about their experiences using Niagahoster services. I got 3rd place in this challenge."
        client_name={"Niagahoster"}
        turnaround={"1 Week"}
        team={"Only Me"}
        image="/blog-niaga.png"
      />
    </>
  );
}
