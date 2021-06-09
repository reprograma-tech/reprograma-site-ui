import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export function Header() {
  const [showBackground, setShowBackground] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setShowBackground(window.scrollY >= 300);
  };

  const handleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  return (
    <header
      className={`${styles.header} ${
        showBackground ? styles.headerFilled : ""
      }`}
    >
      <div>
        <a href="/">
          <img
            src={
              showBackground
                ? "/images/logo/reprograma.png"
                : "/images/logo/reprograma-reduzido.png"
            }
          />
        </a>
        <nav className={styles.navigation}>
          <ul className={styles.menuDesktop}>
            <li id="menu-ensino" onClick={handleSubmenu}>
              Ensino
              <div
                className={`${styles.submenu} ${
                  showSubmenu ? styles.showSubmenu : ""
                }`}
              >
                <a href="/#cursos">Cursos</a>
                <a href="/projetos">+ Projetos</a>
              </div>
            </li>
            <li>
              <a href="/equipe">Equipe</a>
            </li>
            <li>
              <a href="/parcerias">Parceiros</a>
            </li>
            <li>
              <a href="/contrate">Contrate uma aluna</a>
            </li>
            <li>
              <a href="/todas-tech">Todas em Tech</a>
            </li>
            <li>
              <a href="/midia">Na mídia</a>
            </li>
          </ul>
        </nav>
        <div
          onClick={handleMenuMobile}
          className={`${styles.hamburguer} ${
            showMenuMobile ? styles.mobileToggle : ""
          }`}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <ul
          className={`${styles.menuMobile} ${
            showMenuMobile ? styles.showMenuMobile : ""
          }`}
        >
          <li>
            <a href="/#courses">Cursos</a>
          </li>
          <li>
            <a href="/projetos">Projetos</a>
          </li>
          <li>
            <a href="/equipe">Equipe</a>
          </li>
          <li>
            <a href="/parcerias">Parceiros</a>
          </li>
          <li>
            <a href="/contrate">Contrate uma aluna</a>
          </li>
          <li>
            <a href="/todas-tech">Todas em Tech</a>
          </li>
          <li>
            <a href="/midia">Na mídia</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
