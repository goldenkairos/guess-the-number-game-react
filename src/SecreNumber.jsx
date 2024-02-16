import { useEffect, useState } from "react";
import Block from "./Block";
import UserGuess from "./UserGuess";
import DisplayResult from "./DisplayResult";

function SecretNumber() {
  const [secretNumber, setSecretNumber] = useState("");
  const [userGuesses, setUserGuesses] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState([
    [
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
    ],
    [
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
    ],
    [
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
    ],
    [
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
      { number: "", status: "#121213" },
    ],
  ]);

  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [userWin, setUserWin] = useState(false);

  useEffect(() => {
    if (!gameStarted) {
      startGame();
      setGameStarted(true);
    }
  }, []);

  function numberGenerator(secretNumberLength) {
    let secretNumber = "";

    for (let i = 0; i < secretNumberLength; i++) {
      secretNumber += Math.floor(Math.random() * 9 + 1);
    }
    console.log(secretNumber);
    return secretNumber;
  }

  //update the board based on userInput
  function updateBoard(userInput, currRowIdx) {
    let usetInputArr = userInput.split("");
    let count = 0;
    //return "green" if the digit from user's guess is in the correct position
    //return "yellow" if the digit from user's guess is in the secret number
    //return "gray" if the digit is not in the secret number
    const validateUserGuess = usetInputArr.map((inputDigit, idx) => {
      if (inputDigit === secretNumber[idx]) {
        count += 1;
        return { number: inputDigit, status: "#538d4e" }; //green for correct position
      } else if (secretNumber.includes(inputDigit)) {
        return { number: inputDigit, status: "#c3b26a" }; //yellow for correct digit
      } else {
        return { number: inputDigit, status: "#373b37" }; //gray for incorrect input
      }
    });

    //update the board after validation
    setBoard((prevBoard) => {
      let updatedBoard = [...prevBoard];
      updatedBoard[currRowIdx] = validateUserGuess;
      return updatedBoard;
    });

    //checkf if the user has guessed all 4 digit correctly
    if (count === 4) {
      setCorrectCount(4);
      setUserWin(true);
    }
  }

  function handleUserInput(userInput) {
    setUserGuesses([...userGuesses, userInput]);
    const currRowIdx = userGuesses.length;
    console.log("current guess index ", currRowIdx);
    updateBoard(userInput, currRowIdx);
  }

  function startGame() {
    const newSecretNumber = numberGenerator(4);
    setSecretNumber(newSecretNumber);
    setUserGuesses([]);
    setBoard([
      [
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
      ],
      [
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
      ],
      [
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
      ],
      [
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
        { number: "", status: "#121213" },
      ],
    ]);

    setIsGameCompleted(false);
    setCorrectCount(0);
    setUserWin(false);
  }

  function checkGameCompletion() {
    const numberOfGuesses = userGuesses.length;

    if (numberOfGuesses === 4 || correctCount === 4) {
      setIsGameCompleted(true);
    }
  }

  useEffect(() => {
    checkGameCompletion();
  }, [userGuesses]);

  return (
    <>
      <div className="game-container">
        {isGameCompleted ? (
          <DisplayResult secretNumber={{ secretNumber }} userWin={userWin} />
        ) : (
          <div></div>
        )}
        <UserGuess
          handleUserInput={handleUserInput}
          isGameCompleted={isGameCompleted}
        />
        <div className="board-container">
          <div className="grid-container">
            {board.map((row, index) =>
              row.map((block, blockIndex) => (
                <Block
                  key={blockIndex}
                  number={block.number}
                  color={block.status}
                  secretNumber={secretNumber}
                />
              ))
            )}
          </div>
        </div>
        <button className="new-game-button" type="button" onClick={startGame}>
          New Game
        </button>
      </div>
    </>
  );
}

export default SecretNumber;
