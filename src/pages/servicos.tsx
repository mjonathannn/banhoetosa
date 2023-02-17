import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Section2 from "../components/section2/Section2";
import Section4 from "../components/section4/Section4";

const Servicos = (): JSX.Element => {
  return (
    <>
      <Header />
      <Section2 services />
      <Section4 />
      <Footer />
    </>
  );
};

export default Servicos;
