import React from "react";
import GuessRow from "./GuessRow";

function WordleGrid(props) {
  return (
    <div className="wordle-grid">
      {/* pass wordleGuess into .map as a parameter. */}
      {props.wordleGuessList.map((wordleGuess) => {
        // pass wordleGuess into GuessRow as a prop.
        return <GuessRow wordleGuess={wordleGuess} />;
      })}
    </div>
  );
}

export default WordleGrid;
