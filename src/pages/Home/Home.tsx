import "./HomeStyles.css";

import Header from "../../components/header/Header";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />

      <section className="primarySection">
        <div>
          <h1>
            Uma lambida vale mais que <b>1000 palavras!</b>
          </h1>

          <img src="/images/image2.jpg" alt="image2" />
        </div>
      </section>
    </>
  );
};

export default Home;
