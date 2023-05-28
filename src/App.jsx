import { useState } from "react";
import { peticion } from "./chat.js";
import Formulario from "./components/Formulario.jsx";
import "./App.css";
import "./fonts.css";
import banner from "./assets/images/banner.png";

function App() {

  const [text, settext] = useState("");

  //manda el prompt
  const handlePrompt = ({ question }) => {
    peticion(question).then((res) => {
      settext(res);
    });
  };

  return (
    //amar el form y capurar los valores
    <div className="principal-container">
      <div className="presentation">
        <img className="banner-img" src={banner} alt="" />
        <h1 style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontStyle: 'italic'}}>
          NutriCoach 🍎
        </h1>
        <p style={{ fontFamily: 'Poppins', fontWeight: 'normal', fontStyle: 'normal'}}>
          Adoptar hábitos nutricionales saludables mejora tu calidad de vida, aumenta tu energía, equilibra tu estado de ánimo y contribuye a una vida más larga.
        </p>
      </div>
      <div className="formulario-container">
        <h2 style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontStyle: 'italic'}}>
          NutriCoach
        </h2>
        <p style={{ fontFamily: 'Poppins', fontWeight: 'normal', fontStyle: 'normal'}}>
          ¡Bienvenido al camino hacia una alimentación saludable y equilibrada!
        </p>
        <Formulario></Formulario>
      </div>
    </div>
  );
}

export default App;
