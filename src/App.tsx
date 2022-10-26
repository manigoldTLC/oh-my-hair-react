import HeaderComponent from "./components/Header";
import TituloComponent from "./components/Titulo";

function App() {
  return (
    <>
      <HeaderComponent />
      <TituloComponent>Mais recentes</TituloComponent>
      <TituloComponent>Mais lidos</TituloComponent>
    </>
  );
}

export default App;
