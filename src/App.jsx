import { useState } from "react";
import { peticion } from "./chat.js";

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
      <label>Edad</label>
      <input id="input1" type="text" />
      <br />
      <label>Altura</label>
      <input id="" type="text" />
      <br />
      <label>Peso</label>
      <input id="" type="text" />
      <br />

      <label>Enfermedad</label>
      <select name="" id="xx" >
        <option value="diabetes" >diabetes</option>
        <option value="hipertencion"  >hipertencion</option>
        <option selected value="anemia">anemia</option>
        <option value="gastritis">gastritis</option>
        <option value="colesterol alto">colesterol alto</option>
      </select>

      {/* <button
        onClick={() => handlePrompt(document.getElementById("input1").value)}
      >
        Send
      </button> */}

    </div>
  );
}

export default App;
