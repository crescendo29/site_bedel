import Title from "./components/Title";
import Nav from "./components/Nav";
import "./styles/app.scss";
import Hero from "./images/hero.jpg";
import doctolib from "./images/doctolib.png";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Nav />
      <div className="hero">
        <img
          src={Hero}
          className="hero-image"
          alt="massage"
        />
        <a href="https://www.doctolib.fr/masseur-kinesitherapeute/brest/didier-bedel">
          Prendre Rendez-vous en ligne
          <img
            src={doctolib}
            className="doctolib"
            alt="Doctolib"
          />
        </a>
      </div>
    </div>
  );
};

export default App;
