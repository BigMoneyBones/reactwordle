import { useState } from "react";
import "./App.css";

const defaultGuessList = [
  ["R", "E", "A", "C", "T"],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const defaultKeyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["DELETE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"],
];

function App() {
  // Create variable for guess array, set intial value to 'defaultGuessList'
  const [wordleGuessList, setWordleGuessList] = useState([...defaultGuessList]);
  return (
    <div className="App">
      <header className="App-header">
        {/* call and display header element */}
        <WordleHeader />
        {/* Chain reaction, WordleGrid calls WordleGridRow which calls WordleGridLetter */}
        <WordleGrid wordleGuessList={wordleGuessList} />
        <KeyBoardComponent />
      </header>
    </div>
  );
}

// 'Wordle Clone' header element component
const WordleHeader = () => {
  return <h1 className="wordle-header">Wordle Clone</h1>;
};

// WORDLE GUESS COMPONENTS

const WordleGrid = (props) => {
  // const { wordleGuessList } = props;
  return (
    <div className="wordle-grid">
      {props.wordleGuessList.map((wordleGuess) => {
        return <WordleGridRow wordleGuess={wordleGuess} />;
      })}
    </div>
  );
};

const WordleGridRow = (props) => {
  return (
    <div className="wordle-grid-row">
      {props.wordleGuess.map((wordleLetter) => {
        return (
          <WordleGridLetter
            wordleLetter={wordleLetter}
            isCorrect={wordleLetter === "A" || wordleLetter === "E"}
          />
        );
      })}
    </div>
  );
};

const WordleGridLetter = (props) => {
  return (
    <div className={`wordle-grid-letter wordle-grid-letter-${props.isCorrect}`}>
      {props.wordleLetter}
    </div>
  );
};

// KEYBOARD COMPONENTS

//
const KeyComponent = (props) => {
  return <div className="Keyboard-key">{props.letter}</div>;
};

//
const KeyRowComponent = (props) => {
  return (
    <div className="Keyboard-row">
      {props.keyRow.map((letter, index) => {
        return <KeyComponent key={index} letter={letter}></KeyComponent>;
      })}
    </div>
  );
};

//
const KeyBoardComponent = () => {
  return (
    <div className="Keyboard-grid">
      {defaultKeyboard.map((row, index) => {
        return <KeyRowComponent key={index} keyRow={row}></KeyRowComponent>;
      })}
    </div>
  );
};

export default App;

/*
Use import/export syntax with react
User require/module.export syntax with express
// Default Export / Only exporting 1 thing
export default App;
import App from "./app.js"
module.exports = App
const App = require("./app.js")
---
// Module Export / Exporting multiple things
export App
import { App } from "./app.js"
module.exports = {
  App: App
}
const { App } = require("./app.js") 
*/
