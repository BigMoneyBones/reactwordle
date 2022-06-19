import React from "react";
import KeyboardRow from "./KeyboardRow";

// Keyboard array list
const keyList = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

function WordleKeyboard(props) {
  return (
    <div className="keyboard-grid">
      {/* map over keyList and return a row of keys for each iteration of the array */}
      {keyList.map((row, index) => {
        // assign props to each row
        return <KeyboardRow row={row} key={index} />;
      })}
    </div>
  );
}

export default WordleKeyboard;
