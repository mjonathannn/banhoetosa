import { Link } from "react-router-dom";

import "./styles.css";

import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/">Página Inicial</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
      </ul>

      <img src={Logo} alt="logo" />

      <ul>
        <li>Agende Conosco!</li>
        <li>
          <i className="fa-brands fa-whatsapp fa-2xl"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </li>
      </ul>
    </div>
  );
};

export default Header;
