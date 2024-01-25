import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Projects
        project_name={"TimeTree Redesign Mobile App"}
        project_desc="Improve KPI for this App. Funnel from First App Downloads to Share Calendar with other friends and Input first calendar event."
        client_name={"-"}
        turnaround={"3 Days"}
        team={"Only Me"}
        image="/TimeTree.png"
      />
    </>
  );
}
