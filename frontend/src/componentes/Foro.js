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
        <h2 class="coment">Comentarios</h2>

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
        <h2>Novedades</h2>
        
         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://imgv2-2-f.scribdassets.com/img/document/92287189/original/a4eab83dcb/1601117725?v=1" className="imagen2" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://image.isu.pub/110302150927-5afdd652222c489eb5bc5905d8b5bf64/jpg/page_1.jpg" className="imagen2" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src="https://lh3.googleusercontent.com/proxy/Et0e5nPxN-QpTwvXwA6leKmOhrFgcNvW4Wt1-GEMUKFKl9y_U4gCwmzCG98FHPWpBYp7QQd-gDEvhY4lBMNXqiRPga9toQMJasdV1D9lsPI4_hczvx-4FEnwhjXbBdsBZe5cZogNNzsth5RpKFxbEjg0zFAPom50zbs" className="imagen2" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src="https://img.yumpu.com/32846278/1/500x640/descargar-pdf-publicaciones-caf.jpg" className="imagen2" alt="..."/>
    </div>

     <div className="carousel-item">
      <img src="https://images.spot.im/v1/production/sjlb8gu2xyah9hk8vwue" className="imagen2" alt="..."/>
    </div>

     <div className="carousel-item">
      <img src="https://www.ins.gov.co/Noticias/SiteAssets/Paginas/Programa-Interlaboratorio-De-Control-De-Calidad-De-Agua-Potable-infografia/ins_instituto-ancional-salud-esquema-agua-potable.jpg" className="imagen2" alt="..."/>
    </div>

  </div>
  <a  className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
        </div>



      </div>

    </div>



  );
}
export default Video;

