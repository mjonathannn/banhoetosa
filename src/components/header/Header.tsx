import { Link } from "react-router-dom";

import "./HeaderStyles.css";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container">
        <ul className="wrappedMenu">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <ul className="menu">
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
        </ul>

        <img src="/images/logo.png" alt="logo" />

        <ul className="contact">
          <li>
            <span>Agende Conosco!</span>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp fa-2xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
