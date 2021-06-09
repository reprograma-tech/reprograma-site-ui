import Head from "next/head";
import { Banner } from "../components/Banner";
import { partnersBanner } from "../components/Banner/data";

export default function Partners() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Parceiros"}</title>
      </Head>
      <Banner banner={partnersBanner} />
    </>
  );
}