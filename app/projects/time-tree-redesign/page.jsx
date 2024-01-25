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
