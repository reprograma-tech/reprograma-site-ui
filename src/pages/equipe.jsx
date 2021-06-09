import Head from "next/head";
import { Banner } from "../components/Banner";
import { teamBanner } from "../components/Banner/data";

export default function Team() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Equipe"}</title>
      </Head>
      <Banner banner={teamBanner} />
    </>
  );
}
