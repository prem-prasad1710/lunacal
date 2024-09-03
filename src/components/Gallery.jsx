import React from "react";
import image from "../components/img/image.png"

function Gallery() {
  return (
    <div className="gallery">
      <div className="button-container">
        <button id="gallery-button">Gallery</button>
        <button id="add-button">+ Add image</button>
        <div id="arrow-button">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
      <div className="image-gal">
        <img src= {image} alt="Gallery Item" />
        <img src={image} alt="Gallery Item" />
        <img src={image} alt="Gallery Item" />
      </div>
    </div>
  );
}

export default Gallery;