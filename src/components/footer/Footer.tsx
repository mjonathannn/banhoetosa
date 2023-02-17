import Image from "next/image";

import styles from "./FooterStyles.module.css";

import Map from "public/images/map.png";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>Entre em contato</li>
          <li onClick={() => window.open("https://wa.me/5511979843026")}>
            Whatsapp 1: (11) 9 7984-3026
          </li>
          <li onClick={() => window.open("https://wa.me/5511948955183")}>
            Whatsapp 2: (11) 9 4895-5183
          </li>
          <li>
            Endereço: R. Águas Claras, 98 - Vila Pereira Cerca, São Paulo - SP,
            02931-000
          </li>
        </ul>

        <ul>
          <li>Serviços</li>
          <li>Banho</li>
          <li>Tosa</li>
          <li>Corte de Unhas</li>
          <li>Desembolo de Pelos</li>
        </ul>

        <Image src={Map} alt="Map" />
      </div>
    </div>
  );
};

export default Footer;
