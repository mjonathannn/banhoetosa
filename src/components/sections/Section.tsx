import Image from "next/image";

import styles from "./SectionStyles.module.css";

import Image2 from "public/images/image2.jpg";

const Section = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>
          Uma lambida vale mais que <b>1000 palavras!</b>
        </h1>

        <Image src={Image2} alt="image2" />
      </div>
    </div>
  );
};

export default Section;
