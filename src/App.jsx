import Formulario from "./components/Formulario.jsx";
import "./App.css";
import "./fonts.css";
import banner from "./assets/images/banner.svg";

function App() {

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
