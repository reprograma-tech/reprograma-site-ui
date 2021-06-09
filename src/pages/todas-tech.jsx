import Head from "next/head";
import { Banner } from "../components/Banner";
import { allTechBanner } from "../components/Banner/data";

export default function AllTech() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Todas em tech"}</title>
      </Head>
      <Banner banner={allTechBanner} />
    </>
  );
}