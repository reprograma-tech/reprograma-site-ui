import styles from "./styles.module.scss";
import { LinkButton } from "../../LinkButton";

export function SectionCourses({ courses }) {
  return (
    <section id="cursos" className={styles.sectionCourses}>
      <h2 className={styles.sectionTitle}>{`${courses.title} {`}</h2>
      <div className={styles.nextCourses}>
        {courses.list.map((course, index) => (
          <div key={index} className={styles.course}>
            <p className={styles.courseSubtitle}>{course.type}</p>
            <h3>{course.title}</h3>
            <h4>{course.subtitle}</h4>
            <p className={styles.courseInfo}>
              {course.description}
            </p>
            <LinkButton
              label={course.link.label}
              variant="white"
              to={course.link.to}
            />
          </div>
        ))}
      </div>

      <span className={styles.sectionTitle}>{"}"}</span>
    </section>
  );
}
