import React from "react";
import GuessLetter from "./GuessLetter";

function GuessRow(props) {
  return (
    <div className="guess-row">
      {props.wordleGuess.map((wordleLetter) => {
        return <GuessLetter wordleLetter={wordleLetter} />;
      })}
    </div>
  );
}

export default GuessRow;
