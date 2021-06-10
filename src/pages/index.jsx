import Head from "next/head";
import { Banner } from "../components/Banner";
import { homeBanner } from "../components/Banner/data";
import { SectionScenario } from "../components/Home/SectionScenario";
import { scenarioData } from "../components/Home/SectionScenario/data";
import { SectionAbout } from "../components/Home/SectionAbout";
import { aboutData } from "../components/Home/SectionAbout/data";
import { SectionNumbers } from "../components/Home/SectionNumbers";
import { numbersData } from "../components/Home/SectionNumbers/data";
import { SectionTestimonies } from "../components/Home/SectionTestimonies";
import { testimoniesData } from "../components/Home/SectionTestimonies/data";
import { SectionOurTeam } from "../components/Home/SectionOurTeam";
import { ourTeamData } from "../components/Home/SectionOurTeam/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Home"}</title>
      </Head>
      <Banner banner={homeBanner} />
      <SectionScenario scenario={scenarioData} />
      <SectionAbout about={aboutData} />
      <SectionNumbers numbers={numbersData} />
      <SectionTestimonies testimonies={testimoniesData}/>
      <SectionOurTeam ourTeam={ourTeamData}/>
    </>
  );
}
