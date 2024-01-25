import { metadata } from "@/app/layout";
import Head from "next/head";

import Projects from "@/app/template/projects.jsx";
export default function Page() {
  return (
    <>
      <Head>
        <title>Luxury hotel landing page</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags as needed */}
      </Head>
      <Projects
        project_name={"Luxury hotel landing page."}
        project_desc="Actually, this is a case study provided by one of the companies I applied to, which involves creating a landing page design for a luxury hotel."
        client_name={"-"}
        turnaround={"3 Days"}
        team={"Only Me"}
        image="/luxury-hotel.jpg"
      />
    </>
  );
}
