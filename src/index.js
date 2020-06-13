import React from "react";
import { render } from "react-dom";
import imageData from "./image-data";

class Gallery extends React.Component {
  render() {
    return (
      <ul className="container">
        {this.props.images.map(({ title, alt, src }) => {
          return (
            <li key={title} className="gallery-card">
              <img src={src} alt={alt} title={title} />
            </li>
          );
        })}
      </ul>
    );
  }
}

render(<Gallery images={imageData} />, document.getElementById("root"));
