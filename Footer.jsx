import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <h5>
        <strong>ShapeAI Copyright @ {currYear}</strong>
      </h5>
    </footer>
  );
}

export default Footer;
