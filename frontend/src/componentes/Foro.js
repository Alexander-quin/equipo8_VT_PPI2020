import React from "react";
import "../estilo/foro.css";

function Video() {
  return (
    <div>
      <div class="Header2">
        {" "}
        <h1 class="titulooverflow-y: visible;overflow-y: visible;"> Foro</h1>
      </div>
      <div class="body">
        <h2>Comentarios</h2>

        <div class="caja">
<form>
        <label for="nya">Nombres y Apellidos:</label>
        <br />
        <input type="text" name="nya" id="nya" />
        <br /><br />
        <label for="email">Email:</label>
        <br />
        <input type="text" name="email" id="email" />
        <br /><br />
        <label for="edad">Edad:</label>
        <br/>
        <input type="text" name="edad" id="edad" /> 
        <br /><br />
        <label for="comentario">Comentario:</label>
        <br/>
        <input type="text" name="comentario" id="comentario" /> 
        <br /><br />
        <input type="submit" value="Enviar" />
      </form>

        
        </div>



      </div>

    </div>



  );
}
export default Video;

