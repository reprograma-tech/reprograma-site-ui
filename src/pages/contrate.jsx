import Head from "next/head";
import { Banner } from "../components/Banner";
import { hiringBanner } from "../components/Banner/data";

export default function Hiring() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Contrate uma aluna"}</title>
      </Head>
      <Banner banner={hiringBanner} />
    </>
  );
}