import React from 'react';
import imagenProyecto from '../assets/imagen.jpg'; // asegúrate de que exista

const MainContent = () => (
  <div>
    <h1>Proyecto Integrador: Checklist</h1>
    <img src={imagenProyecto} alt="Proyecto Integrador" style={{ maxWidth: '100%' }} />
    <p>Este proyecto permite registrar la asistencia de los estudiantes mediante su carnet.</p>
    <ul>
      <li>Lectura de código de barras</li>
      <li>Registro automático en base de datos</li>
      <li>Consulta de informes por docentes</li>
    </ul>
  </div>
);

export default MainContent;
