import Head from "next/head";
import { Banner } from "../components/Banner";
import { homeBanner } from "../components/Banner/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Home"}</title>
      </Head>
      <Banner banner={homeBanner} />
    </>
  );
}