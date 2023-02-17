import styles from "./Section4Styles.module.css";

const Section4 = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>
          Por que escolher o Banho e<br /> Tosa SKS?
        </h1>

        <h2>
          Somos uma equipe que trabalha com seriedade naquilo que fazemos com
          amor e dedicação, tratando os pets como cada bichinho de estimação ou
          filho como todo tutor dos seus pets os tratam. Estamos no mercado
          desde de 8 de julho de 2022, com ótima localização e uma excelente
          aceitação no mercado pet. Com precos acessíveis a esse ramo de
          trabalho.
        </h2>

        <button onClick={() => window.open("https://wa.me/5511979843026")}>
          Fale conosco
        </button>
      </div>
    </div>
  );
};

export default Section4;
