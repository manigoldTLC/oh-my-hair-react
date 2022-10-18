import { Header } from "./style";

const HeaderComponent = () => {
  return (
    <Header>
      <button className="header__menu">
        <img src="assets/vetores/Vector4.svg" alt="menu icone" />
      </button>

      <figure className="header__logo">
        <img src="assets/logo OMH! 3.svg" alt="logo oh my hair" />
      </figure>

      <button className="header__inscricao">Inscreva-se</button>

      <ul className="header__lista">
        <li className="item">
          <a className="item__wrapper">
            <span>Tendências</span>
            <img
              className="item__mais"
              src="assets/vetores/menu/Vector2.svg"
              alt="mais"
            />
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
          <img
            className="item__mais"
            src="assets/vetores/menu/Vector2.svg"
            alt="mais"
          />
        </li>
        <li className="item">
          <span>Cortes</span>
          <img
            className="item__mais"
            src="assets/vetores/menu/Vector2.svg"
            alt="mais"
          />
        </li>
        <li className="item">
          <span>Coloridos</span>
          <img
            className="item__mais"
            src="assets/vetores/menu/Vector2.svg"
            alt="mais"
          />
        </li>

        <li className="item">
          <span>Penteados</span>
          <img
            className="item__mais"
            src="assets/vetores/menu/Vector2.svg"
            alt="mais"
          />
        </li>

        <li className="item">
          <span>Dicas</span>
          <img
            className="item__mais"
            src="assets/vetores/menu/Vector2.svg"
            alt="mais"
          />
        </li>

        <button className="header__inscricao header__inscricao--desktop">
          Inscreva-se
        </button>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
