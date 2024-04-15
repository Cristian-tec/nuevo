import React from "react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import drescode from "../img/icono-dresscode.svg";

import uno from "../img/galeria/1.jpg";
import dos from "../img/galeria/2.jpg";
import tres from "../img/galeria/3.jpg";

function Galeria() {
  const images = [
    {
      original: uno,
      thumbnail: uno,
    },
    {
      original: dos,
      thumbnail: dos,
    },
    {
      original: tres,
      thumbnail: tres,
    },
  ];

  return (
    <>
      <div class="galeria">
        <ImageGallery items={images} thumbnailPosition="top" autoPlay="true" />
      </div>
    </>
  );
}

export default Galeria;
