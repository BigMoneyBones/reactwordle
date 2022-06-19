import { useState } from "react";
import "./App.css";
import WordleGrid from "./components/WordleGrid";
import WordleKeyboard from "./components/WordleKeyboard";
import { answerList, wordList } from "./wordleWords";

// initial value of wordleGuessList
const defaultGuessList = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// Keyboard array list
// const keyList = [
//   ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//   ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//   ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
// ];
// const keyList1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
// const keyList2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
// const keyList3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

// 'Wordle Clone' header element component
const WordleHeader = () => {
  return <h1 className="wordle-header">Wordle Clone</h1>;
};

function App() {
  const [wordleGuessList, setWordleGuessList] = useState([...defaultGuessList]);
  const [letterGuess, setLetterGuess] = useState("");
  const [wordleGuessIndex, setWordleGuessIndex] = useState(0);
  const [wordleLetterIndex, setWordleLetterIndex] = useState(0);
  // const [wordleAnswer, setWordleAnswer] = useState(pickWordleAnswer());
  const [gameState, setGameState] = useState("playing"); // 3 possible values 'playing', 'won', 'lost'

  // when a key is pressed on the keyboard, or clicked on the virtual keyboard, invoke handleKeyPress
  const handleKeyPress = (key) => {
    console.log(key);
  };

  const handleBackspace = () => {};

  const pickWordleAnswer = () => {};

  const checkAndUpdateGameState = () => {};

  const checkIsValidGuess = () => {};

  const handleEnterKey = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <WordleHeader />
        <WordleGrid wordleGuessList={wordleGuessList} />
        <WordleKeyboard
          wordleGuessList={wordleGuessList}
          setWordleGuessList={setWordleGuessList}
          letterGuess={letterGuess}
          setLetterGuess={setLetterGuess}
        />
      </header>
    </div>
  );
}

export default App;
