import styles from "./styles.module.scss";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>
        The future is female <span className={styles.underline}>coders.</span>
      </h3>
      <div className={styles.recognitions}>
        <img
          src="/images/footer/mit_inclusive_innovation_challenge.png"
          alt="MIT Inclusive Innovation Challenge Finalist"
        />
        <img
          src="/images/footer/fundacao_arymax.png"
          alt="Prêmio Liderança Jovem Fundação Arymax"
        />
        <img
          src="/images/footer/ibm_volunteer_excellence_award.png"
          alt="IBM Volunteer Excellence Award"
        />
      </div>
      <div className={styles.social}>
        <div className={styles.icons}>
          <a href="https://instagram.com/reprogramaBR" target="_blank">
            <FaInstagram aria-hidden="true" />
          </a>
          <a href="https://facebook.com/ReprogramaBr" target="_blank">
            <FaFacebookSquare aria-hidden="true" />
          </a>
          <a href="https://twitter.com/ReprogramaBr" target="_blank">
            <FaTwitterSquare aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/company/reprogramabr"
            target="_blank"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="mailto:info@reprograma.com.br?Subject=Olá!" target="_top">
            <FaEnvelope className={styles.icon} aria-hidden="true" />
          </a>
        </div>
        <p>Avenida Paulista, 1374 </p>
        <p>São Paulo - SP, Brasil</p>
        <img
          src="/images/logo/reprograma-fundoclaro.png"
          alt="logo da reprograma"
        />
      </div>
    </footer>
  );
}
