import { Header, BotaoInscricao, BotaoInscricaoDesktop } from "./style";
import { IoIosArrowDown } from "react-icons/io";

const HeaderComponent = () => {
  const logo = require("../../assets/header/logo.png");
  const menu = require('../../assets/menu/Vector1.svg');

  return (
    <Header>
      <button className="menu">
        <img src={menu} alt="menu icone" />
      </button>

      <figure className="logo">
        <img src={logo} alt="logo oh my hair" />
      </figure>

      <BotaoInscricao>Inscreva-se</BotaoInscricao>

      <ul className="lista">
        <li className="item">
          <a className="item__wrapper">
            <span>Tendências</span>
            <IoIosArrowDown className="mais" color="#D76B50" size={20} />
          </a>

          <div className="item__submenu">
            <a href="#">Cortes</a>
            <a href="#">Coloração</a>
            <a href="#">Finalização</a>
            <a href="#">Penteados</a>
            <a href="#">Autocuidado</a>
            <a href="#">Entrevistas</a>
          </div>
        </li>
        <li className="item">
          <span>Meu cabelo</span>
          <IoIosArrowDown className="mais" color="#D76B50" size={20} />
        </li>
        <li className="item">
          <span>Cortes</span>
          <IoIosArrowDown className="mais" color="#D76B50" size={20} />
        </li>
        <li className="item">
          <span>Coloridos</span>
          <IoIosArrowDown className="mais" color="#D76B50" size={20} />
        </li>

        <li className="item">
          <span>Penteados</span>
          <IoIosArrowDown className="mais" color="#D76B50" size={20} />
        </li>

        <li className="item">
          <span>Dicas</span>
          <IoIosArrowDown className="mais" color="#D76B50" size={20} />
        </li>

        <BotaoInscricaoDesktop>Inscreva-se</BotaoInscricaoDesktop>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
