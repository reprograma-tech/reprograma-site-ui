import styles from "./styles.module.scss";

export function SectionAbout({ about }) {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.about}>
        <h2>{about.title}</h2>
        <p>{about.text}</p>
      </div>

      <div className={styles.videoMobile}>
        <iframe src={about.videoUrl} allowFullScreen></iframe>
      </div>
      <div className={styles.videoDesktop}>
        <iframe
          width="560"
          height="315"
          src={about.videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
