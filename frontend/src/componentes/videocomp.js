import React from "react";
import "../estilo/video.css";
function Video() {
  return (
    <div>
      <div class="Header1">
        {" "}
        <h1 class="titulooverflow-y: visible;overflow-y: visible;"> Video</h1>
      </div>
      <div class="body">
        <h2>Video de filtrado:</h2>

        
        <iframe width="853" height="480" src="https://www.youtube.com/embed/5z9BKE2zyr0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}
export default Video;


