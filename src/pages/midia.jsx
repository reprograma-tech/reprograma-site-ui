import Head from "next/head";
import { Banner } from "../components/Banner";
import { newsBanner } from "../components/Banner/data";

export default function News() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Na mídia"}</title>
      </Head>
      <Banner banner={newsBanner} />
    </>
  );
}