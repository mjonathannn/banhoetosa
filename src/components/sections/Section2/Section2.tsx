import Image from "next/image";

import styles from "./Section2Styles.module.css";

import Unha from "public/images/unha.png";
import Pelos from "public/images/pelos.png";
import Banho from "public/images/Banho.png";
import Hidratacao from "public/images/hidratacao.png";

const Section2 = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>Venha conhecer nossos serviços!</h1>

        <div className={styles.box}>
          <Image src={Banho} alt="Banho" />

          <h2>Banho e Tosa</h2>

          <p>
            Oferecemos não apenas um simples banho e tosa, mas todo um cuidado
            especial. Com produtos de primeira linha e toalhas esterilizadas e
            embaladas individualmente, em um ambiente climatizado o seu pet se
            reserva ao momento revigorante e sai muito estiloso!
          </p>
        </div>

        <div className={styles.box}>
          <Image src={Hidratacao} alt="Hidratacao" />

          <h2>Hidratação</h2>

          <p>
            Para fazer uma tosa higiênica ou dar um bom banho em seu cachorro ou
            gato é preciso mais que dedicação e profissionais qualificados. Um
            ambiente climatizado, com água na temperatura ideal e instalações
            adequadas também contam (e muito) na escolha da pet shop que seu
            grande amigo irá frequentar.
          </p>
        </div>

        <div className={styles.box}>
          <Image src={Unha} alt="Unha" />

          <h2>Corte de Unhas</h2>

          <p>
            Temos um padrão a seguir nesse seguimento pet, seguindo assim a
            biologia do animal, ja esta incluso no banho do seu pet, sem custo
            adicional.
          </p>
        </div>

        <div className={styles.box}>
          <Image src={Pelos} alt="Pelos" />

          <h2>Desembolo de Pelos</h2>

          <p>
            Desembolo se refere a desembolar ou desenrolar os pelos dos pets,
            sendo feito esse procedimento em alguns pets de raças específicas
            como: yorkieshare, poodle, goldens, maltês, shistzu, chouchou, entre
            outros, sendo esses os pets que tem pelo sobre pelo, quando não
            conseguimos com o desembolo, é indicado a tosa geral para melhor
            conforto do seu cachorrinho de estimação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
