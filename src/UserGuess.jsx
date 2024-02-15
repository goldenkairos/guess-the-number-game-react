import { useState } from "react";
function UserGuess({ handleUserInput, isGameCompleted }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the form from submitting
    console.log(userInput);
    handleUserInput(userInput);

    //clear the input field after each submission
    setUserInput("");
  };

  //display user's input on the field as the user types
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="userInput"
        maxLength="4"
        pattern="\d{4}"
        required
        value={userInput}
        onChange={handleChange}
      ></input>
      <button type="submit" disabled={isGameCompleted}>
        Submit Guess
      </button>
    </form>
  );
}

export default UserGuess;
