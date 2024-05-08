import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Projects
        project_name={"Smarttouch Web Design"}
        project_desc="Smarttouch is a distributor of Elo, a well-known brand in the touchscreen sector. In making this website, I used Figma as a design tool, and WordPress as development."
        client_name={"-"}
        turnaround={"3 Days"}
        team={"Only Me"}
        images={["/Smarttouch_1.png", "/smarttouch_3.png"]}
      />
    </>
  );
}
