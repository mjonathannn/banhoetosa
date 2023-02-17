import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./HeaderStyles.module.css";

import Logo from "public/images/logo.png";
import { useState } from "react";

const Header = (): JSX.Element => {
  const Router = useRouter();

  const [mobileMenuItemsVisible, setMobileMenuItemsVisible] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <ul
          className={styles.mobileMenu}
          onClick={() => setMobileMenuItemsVisible(!mobileMenuItemsVisible)}
        >
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className={styles.mobileMenuItemsContainer}>
          {mobileMenuItemsVisible && (
            <ul className={styles.mobileMenuItems}>
              <li
                onClick={() => {
                  Router.push("/");
                  setMobileMenuItemsVisible(false);
                }}
              >
                Página Inicial
              </li>
              <li
                onClick={() => {
                  Router.push("/sobre");
                  setMobileMenuItemsVisible(false);
                }}
              >
                Sobre
              </li>
              <li
                onClick={() => {
                  Router.push("/servicos");
                  setMobileMenuItemsVisible(false);
                }}
              >
                Serviços
              </li>
            </ul>
          )}
        </div>

        <ul className={styles.menu}>
          <li onClick={() => Router.push("/")}>Página Inicial</li>
          <li onClick={() => Router.push("/sobre")}>Sobre</li>
          <li onClick={() => Router.push("/servicos")}>Serviços</li>
        </ul>

        <Image src={Logo} alt="logo" />

        <ul className={styles.contact}>
          <li>Agende Conosco!</li>
          <li>
            <i
              className="fa-brands fa-whatsapp fa-2xl"
              onClick={() => window.open("https://wa.me/5511979843026")}
            />
          </li>
          <li>
            <i
              className="fa-brands fa-instagram fa-2xl"
              onClick={() =>
                window.open("https://www.instagram.com/sksbanhoetosa/")
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
