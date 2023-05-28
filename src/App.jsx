import Formulario from "./components/Formulario.jsx";

function App() {
  
  

  //manda el prompt
  const handlePrompt = (question) => {
    peticion(question).then((res) => {
      settext(res);
    });
  };

  return (
    //armar el form y capurar los valores
    <div>
      <Formulario/>
    </div>
  );
}

export default App;
