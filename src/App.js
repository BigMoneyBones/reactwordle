import React, { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
function App() {
  // state to store solution
  const [solution, setSolution] = useState(null);
  // useEffect takes in 2 arguments - a callback (a function) and a dependency array
  useEffect(() => {
    // Fetch 'solutions' from json file using JSON server
    fetch("http://localhost:3001/solutions")
      // Fetched json file needs to be passed to a usable javascript datastructure
      // Take response and use .json method on it
      .then((res) => res.json())
      // Take json and print to console log to verify it is being grabbed successfully
      .then((json) => {
        // console.log(json);
        // random int between 0 and length of solutions array
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        // Do not want the entire object- just the word property of the object or the 'solution' word.
        setSolution(randomSolution.word);
      });
    // Because we are using setSolution which is an external function, it has to be passed into the dependency array
    // below as a dependency. The dependency array tells the callback function to trigger when the dependency array
    // changes.
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* while solution is a false value (ie: initial value of 'null') react will not output the value on the right of the '&&'. *conditional template*
      only output the Wordle component when we have a value for the 'solution' condition on the left of &&
      pass solution in as a prop in the wordle component and assign it the value of solution */}
      {/* {solution && <div>Solution is: {solution}</div>} */}
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;

/* 

data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6

game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

*/

// ***JSON SERVER & db.json file***

// Pulling solution words from a json file.
// Using JSON server to host our database (db.json) file
// Installed json server using this command to install globally to the PC: npm install -g json-server
// Run json server to wrap db.json file with API endpoints.
// command: json-server ./data/db.json --port 3001
// react is running on port 3000 so we assign db.json to port 3001
