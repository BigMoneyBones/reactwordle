import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      // convert response into an array of objects
      .then((res) => res.json())
      // take the parsed json, and update letters
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {/* intially letters value is 'null' passing map on a null value will return an error. Once letters has a value, then map through them */}
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          // can use the key prop here because the letters all have unique key values
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
