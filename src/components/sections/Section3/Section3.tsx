import Image from "next/image";

import styles from "./Section3Styles.module.css";

import Didi from "public/images/didi.png";

const Section3 = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image src={Didi} alt="Didi" />

        <div>
          <h1>
            Nós cuidamos do seu animal de estimação como seu amigo merece.
          </h1>

          <h2>
            Sempre cuidando com muito amor e dedicação dos pets queridos.
            Contamos com uma equipe qualificada e instalações que proporcionam
            um serviço diferenciado, de qualidade e com a máxima segurança.
          </h2>

          <button>Quem somos</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
