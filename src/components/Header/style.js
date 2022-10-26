import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  height: 64px;

  .lista {
    display: none;
  }

  @media (min-width: 1200px) {
    height: 125.81px;
    justify-content: space-evenly;
    align-items: center;

    .lista {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 2rem;
      margin: 0;
      height: max-content;

      .item {
        width: max-content;
        display: flex;
        gap: 10px;

        &__wrapper {
          text-decoration: none;
          display: flex;
          gap: 10px;
        }

        span {
          font-weight: 600;
          font-size: 16px;
          color: #585672;
        }

        &__submenu {
          display: none;
        }

        /* .mais {
                    transform: rotate(90deg);
                    width: 6px;
                } */
      }
    }
  }

  .menu {
    background-color: transparent;
    border: none;
    width: 36px;
    height: 36px;
    padding: 0;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .logo {
    width: 181px;
    height: 23px;
    margin: 0;
    display: flex;
    justify-content: center;

    @media (min-width: 1200px) {
      width: 223.73px;
      height: 32px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const BotaoInscricao = styled.button`
  background-color: #ffc425;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 26px;
  padding: 6px 7px;
  border: 1px solid #ffc425;
  border-radius: 5px;
  font-weight: 400;
  font-size: 11px;
  color: #1f3741;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const BotaoInscricaoDesktop = styled(BotaoInscricao)`
    width: max-content;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 13px;
`;
