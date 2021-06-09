import Head from "next/head";
import { Banner } from "../components/Banner";
import { projectsBanner } from "../components/Banner/data";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Projetos"}</title>
      </Head>
      <Banner banner={projectsBanner} />
    </>
  );
}