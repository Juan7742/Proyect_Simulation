import { useState } from "react";
import { peticion } from "./chat.js";
import Formulario from "./components/Formulario.jsx";

function App() {
  
  const [text, settext] = useState("");

  //manda el prompt
  const handlePrompt = ({question}) => {
    peticion(question).then((res) => {
      settext(res);
    });
  };

  return (
    //amar el form y capurar los valores
    <div>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
