import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./HeaderStyles.module.css";

import Logo from "public/images/logo.png";

const Header = (): JSX.Element => {
  const Router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.mobileMenu}>
          <li></li>
          <li></li>
          <li></li>
        </ul>

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
