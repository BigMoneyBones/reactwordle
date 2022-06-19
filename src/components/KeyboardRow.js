import React from "react";
import KeyboardLetter from "./KeyboardLetter";

function KeyboardRow(props) {
  return (
    <div className="keyboard-row">
      {/* map over each row, returning a letter with each iteration */}
      {props.row.map((letter, index) => {
        // assign props to each letter
        return <KeyboardLetter letter={letter} key={index} />;
      })}
    </div>
  );
}

export default KeyboardRow;
