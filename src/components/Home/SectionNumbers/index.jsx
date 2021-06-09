import styles from "./styles.module.scss";

export function SectionNumbers({ numbers }) {
  return (
      <section className={styles.numbers}>
        {numbers.map((number, index) => (
          <div key={index}>
            <h3>{number.value}</h3>
            <p>{number.label}</p>
          </div>
        ))}
    </section>
  );
}
