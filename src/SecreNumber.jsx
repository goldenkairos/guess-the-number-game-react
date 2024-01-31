import { useState } from "react";
import BoardGame from "./BoardGame";
function SecretNumber() {

  const [secretNumber, setSecretNumber] = useState("");
  

  function numberGenerator(secretNumberLength) {
    let newNumber = "";

    for (let i = 0; i < secretNumberLength; i++) {
      newNumber += Math.floor(Math.random() * 9 + 1);
    }

    return newNumber;
  }

  function startGame() {
    const newSecretNumber = numberGenerator(4);
    setSecretNumber(newSecretNumber);
    console.log(newSecretNumber);
  }
  return (
    <>
      {<BoardGame secretNumber={secretNumber} />}
      <button type="submit" onClick={startGame}>
        New Game
      </button>
    </>
  );
}

export default SecretNumber;
