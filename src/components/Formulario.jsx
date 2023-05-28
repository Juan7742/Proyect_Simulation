import React, { useState } from "react";
import { peticion } from "../chat.js";


const Formulario = () => {

  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [enfermedad, setEnfermedad] = useState("");
  //texto final del promp
  const [Respuesta, setRespuesta] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones o acciones adicionales antes de enviar los datos
    let Promp = `Como nutricionista profesional, su tarea es crear un plan de alimentación personalizado para una persona en función de su información personal. Por favor, diseñe un plan de desayuno, comida y cena para una persona de ${edad} años, ${estatura} metros de altura y ${peso} kilos de peso, con ${enfermedad}. El plan de alimentación debe adaptarse a las necesidades y preferencias dietéticas de la persona y, al mismo tiempo, tener en cuenta cualquier restricción o requisito relacionado con su condición médica.

    Su respuesta debe incluir detalles específicos sobre cada comida, incluido el tamaño de las porciones, los ingredientes y los valores nutricionales. También debe proporcionar recomendaciones para refrigerios o comidas adicionales durante el día, según sea necesario. Además, explique por qué eligió ciertos alimentos o nutrientes en el plan y cómo beneficiarán la salud de la persona.
    
    Tenga en cuenta que su respuesta debe ser lo suficientemente flexible como para permitir varias opciones de comidas creativas y relevantes, manteniendo el enfoque en la precisión y satisfaciendo las necesidades dietéticas de la persona.
    
    dame esa información en una tabla con sus respectivas calorías
    `

    peticion(Promp).then((res) => {
      setRespuesta(res);
    });

    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    // Restablecer los valores del formulario después de enviarlos
    setEstatura("");
    setPeso("");
    setEdad("");
    setEnfermedad("");
  };

//----------------------------------------- 
  return (
    <>
    
      <textarea name="" id="" cols="30" rows="10" readOnly>{Respuesta}</textarea>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="estatura">Estatura : </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            id="estatura"
            name="estatura"
            value={estatura}
            required
            onChange={(e) => setEstatura(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="peso">Peso : </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            id="peso"
            name="peso"
            value={peso}
            required
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="edad">Edad : </label>
          <input
            type="number"
            min="1"
            id="edad"
            name="edad"
            value={edad}
            required
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="enfermedad">Enfermedad : </label>
          <select
            id="enfermedad"
            name="enfermedad"
            value={enfermedad}
            required
            onChange={(e) => setEnfermedad(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Hipertensión">Hipertensión</option>
            <option value="Anemia">Anemia</option>
            <option value="Gastritis">Gastritis</option>
            <option value="Colesterol">Colesterol</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
