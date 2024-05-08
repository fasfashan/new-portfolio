import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Projects
        project_name={"Luxury hotel landing page."}
        project_desc="Actually, this is a case study provided by one of the companies I applied to, which involves creating a landing page design for a luxury hotel."
        client_name={"-"}
        turnaround={"3 Days"}
        team={"Only Me"}
        images={[
          "/luxury_hotel.png",
          "/luxury_hotel_2.png",
          "/luxury_hotel_3.png",
        ]}
      />
    </>
  );
}
