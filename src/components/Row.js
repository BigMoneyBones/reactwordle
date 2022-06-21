import React from "react";

export default function Row({ guess, currentGuess }) {
  // if guess has a value, if block with trigger.
  if (guess) {
    // still want it to be styled like the other rows
    return (
      <div className="row past">
        {/*  map through guess array, getting letter and index properties for each letter in the array */}
        {guess.map((letter, index) => (
          // give the class properties of the letter object to the square to color it.
          //   this will literally set the className to the color 'green' 'yellow' or 'grey' allowing a class to be created in the index.css to correspond.
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    // turn currentGuess into an array of letters that can be iterated.
    let letters = currentGuess.split("");

    // will only return something if a value for current guess exists because it is 'truthy'
    return (
      <div className="row current">
        {letters.map((letter, index) => (
          // map through letters and output a square for each one with the letter inside it.
          <div key={index} className="filled">
            {letter}
          </div>
        ))}
        {/* ensures there is always 5 boxes in the row, without this code, the boxes pop up 1 at a time as we type the letters until we reach 5 completing the row. Will return an array of undefined values but always 5 characters long. Using and underscore in place of the value argument is the same as saying 'undefined'. */}
        {[...Array(5 - letters.length)].map((_, index) => (
          // empty squares
          <div key={index}></div>
        ))}
      </div>
    );
  }

  // if guess is still initial value of undefined, return empty row
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
