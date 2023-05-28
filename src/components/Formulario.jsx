import React, { useState } from 'react';
import "./Formulario.css";

const Formulario = () => {
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [edad, setEdad] = useState('');
  const [enfermedad, setEnfermedad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones o acciones adicionales antes de enviar los datos

    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    // Restablecer los valores del formulario después de enviarlos
    setEstatura('');
    setPeso('');
    setEdad('');
    setEnfermedad('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="estatura">Estatura:</label> */}
        <input
          type="number"
          step="0.01"
          min="0.01"
          id="estatura"
          name="estatura"
          placeholder="Ingresa tu estatura"
          value={estatura}
          required
          onChange={(e) => setEstatura(e.target.value)}
        />
      </div>

      <div>
        {/* <label htmlFor="peso">Peso:</label> */}
        <input
          type="number"
          step="0.01"
          min="0.01"
          id="peso"
          name="peso"
          placeholder="Ingresa tu peso"
          value={peso}
          required
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <div>
        {/* <label htmlFor="edad">Edad:</label> */}
        <input
          type="number"
          min="1"
          id="edad"
          name="edad"
          placeholder="Ingresa tu edad"
          value={edad}
          required
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div>
        {/* <label htmlFor="enfermedad">Enfermedad:</label> */}
        <select
          id="enfermedad"
          name="enfermedad"
          value={enfermedad}
          required
          onChange={(e) => setEnfermedad(e.target.value)}
        >
          <option hidden selected value="">Seleccione una opción</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Hipertensión">Hipertensión</option>
          <option value="Anemia">Anemia</option>
          <option value="Gastritis">Gastritis</option>
          <option value="Colesterol">Colesterol</option>
          <option value="No tengo">No tengo</option>
        </select>
      </div>

      <button type="submit">COMENZAR</button>
    </form>
  );
};

export default Formulario;