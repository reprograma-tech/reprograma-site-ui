import styles from "./styles.module.scss";
import { LinkButton } from "../../LinkButton";

export function SectionPartners({ partners }) {
  return (
    <section id="partners" className={styles.sectionPartners}>
      <div className={styles.partnersText}>
        <h3>{partners.title}</h3>
        <p>{partners.text}</p>
        <LinkButton label="Saiba Mais" variant="outlined" to="/parcerias" />
      </div>
      <div className={styles.partnersLogos}>
        {partners.list.map((partner, index) => (
          <img key={index}
            alt={`logo ${partner.name}`}
            src={partner.logo}
          />
        ))}
      </div>
    </section>
  );
}
