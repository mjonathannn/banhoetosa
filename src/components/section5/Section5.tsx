import Image from "next/image";

import styles from "./Section5Styles.module.css";

import Sobre from "public/images/sobre.png";

const Section5 = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image src={Sobre} alt="Sobre" />

        <div>
          <h1>
            Nós cuidamos do seu animal de estimação como seu amigo merece.
          </h1>

          <h2>
            A SKS Banho e Tosa é uma prestadora de servicos que foi criada para
            melhor servir o mercado pet. Tendo o S de Selma, K de Kiara nossa
            pitbull e S de Samuel. Sendo Selma a mãe e Samuel o filho, os dois
            banhistas e tosadores dos pets, sempre com foco e excelência naquilo
            que fazemos respeitando nossos horários e agendamentos para melhor
            servi-los.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section5;
