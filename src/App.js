import React, {useState} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Resumen from "./components/Resumen"
import Resultado from "./components/Resultado"

import styled from "@emotion/styled"

const Contendor = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;

const ContendorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;

`; 


function App() {
  const[resumen, guardarResumen] = useState({
    cotizacion : 0,
    datos: {
      marca: "",
      year: "",
      plan: ""

    }
  });

  // Extraer Datos
  const {cotizacion, datos} = resumen;


  return (
    <Contendor>
      <Header 
        titulo = "Cotizador de Seguros"
      />

      <ContendorFormulario>
        <Formulario 
          guardarResumen = {guardarResumen}
        />

        <Resumen 
          datos= { datos}
        />

        <Resultado
          cotizacion={cotizacion}
        />
      </ContendorFormulario>

    </Contendor>
  );
}

export default App;
