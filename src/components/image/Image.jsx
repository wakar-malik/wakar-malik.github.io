import React from "react";

function Image(props) {
  return <img {...props} alt={props.alt || ""} className={props.className} />;
}

export default Image;
