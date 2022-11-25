
import './App.css';
import Cabeceras from './components/cabeceras';
import PiePagina from './components/piepagina';
import Formulario from './components/formulario';


function App() {
  return (
    <div className="App">
      <Cabeceras TituloPrincipal="Título principal" />
      <Cabeceras Subtitulo="Subtitulo" />
      <Cabeceras Tercertitulo="Tercer titulo" />
      <Formulario />
      <PiePagina email="thebridge@gmail.com" />
      <PiePagina ciudad="Madrid" />
      <PiePagina email="Paseo de Recoletos 15" />

    </div>

  );
}

export default App;
