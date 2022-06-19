import React from "react";

function KeyboardLetter(props) {
  // display each individual letter or 'key'
  return <div className="keyboard-letter">{props.letter}</div>;
}

export default KeyboardLetter;
