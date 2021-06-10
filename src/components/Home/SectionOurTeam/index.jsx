import styles from "./styles.module.scss";
import { LinkButton } from "../../LinkButton";

export function SectionOurTeam({ ourTeam }) {
  return (
    <section id="equipe" className={styles.sectionOurTeam}>
      <img
        alt={ourTeam.image.alternativeText}
        src={ourTeam.image.url}
      />
      <div className={styles.teamBlock}>
        <h3>{ourTeam.title}</h3>
        <p>{ourTeam.text}</p>

        {ourTeam.buttons.map((button, index) => (
          <LinkButton
            key={index}
            label={button.label}
            aria-label={button.alternativeText}
            variant={button.variant ? button.variant : ""}
            to={button.url}
          />
        ))}
      </div>
    </section>
  );
}
