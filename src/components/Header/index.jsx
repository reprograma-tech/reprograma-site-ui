import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header({ links }) {
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
        <Link href="/">
          <a>
            <img
              src={
                showBackground
                  ? "/images/logo/reprograma.png"
                  : "/images/logo/reprograma-reduzido.png"
              }
            />
          </a>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.menuDesktop}>
            <li id="menu-ensino" onClick={handleSubmenu}>
              Ensino
              <div
                className={`${styles.submenu} ${
                  showSubmenu ? styles.showSubmenu : ""
                }`}
              >
                <Link href="/#cursos">
                  <a>Cursos</a>
                </Link>
                <Link href="/projetos">
                  <a>+ Projetos</a>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/equipe">
                <a>Equipe</a>
              </Link>
            </li>
            <li>
              <Link href="/parcerias">
                <a>Parceiros</a>
              </Link>
            </li>
            <li>
              <Link href="/contrate">
                <a>Contrate uma aluna</a>
              </Link>
            </li>
            <li>
              <Link href="/todas-tech">
                <a>Todas em Tech</a>
              </Link>
            </li>
            <li>
              <Link href="/midia">
                <a>Na mídia</a>
              </Link>
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
          {links &&
            links.map((link, index) => (
              <Link key={index} href={link.href}>
                <li>
                  <a onClick={handleMenuMobile}>{link.label}</a>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </header>
  );
}
