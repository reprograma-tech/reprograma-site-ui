import styles from "./styles.module.scss";
import { LinkButton } from "../LinkButton";

export function Banner({ banner }) {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(29, 27, 27, 0), rgba(137, 45, 156, 0.8)), url("${banner.backgroundImage}")`,
      }}
    >
      <div className={styles.bannerContent}>
        <h1>{banner.title}</h1>
        {banner.subtitle && <p>{banner.subtitle}</p>}
        {banner.buttons &&
          banner.buttons.map((button, index) => (
            <LinkButton
              key={index}
              label={button.label}
              aria-label={button.alternativeText}
              variant={button.variant ? button.variant : ""}
              to={button.to}
            />
          ))}
      </div>
    </section>
  );
}
