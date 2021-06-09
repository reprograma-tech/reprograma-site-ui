import Head from "next/head";
import { Banner } from "../components/Banner";
import { homeBanner } from "../components/Banner/data";
import { SectionScenario } from "../components/Home/SectionScenario";
import { scenarioData } from "../components/Home/SectionScenario/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Home"}</title>
      </Head>
      <Banner banner={homeBanner} />
      <SectionScenario scenario={scenarioData} />
    </>
  );
}
