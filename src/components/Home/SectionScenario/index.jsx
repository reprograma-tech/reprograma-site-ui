import styles from "./styles.module.scss";

export function SectionScenario({scenario}) {
  return (
    <section className={styles.sectionScenario}>
      {scenario.map((item, index) => (
        <figure key={index} className={styles.scenarioItem}>
          <img alt={item.image.alternativeText} src={item.image.url} />
          <div dangerouslySetInnerHTML={{__html: `${item.information} <span>[${item.infoSource}]</span>`}} />
        </figure>
      ))}
    </section>
  );
}
