
function UserGuess({ handleUserInput, isGameCompleted }) {

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the form from submitting
    const userInput = e.target.elements.userInput.value;
    console.log(userInput);
    handleUserInput(userInput);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="userInput"
        maxLength="4"
        pattern="\d{4}"
        required
      ></input>
      <button type="submit" disabled={isGameCompleted}>
        Submit Guess
      </button>
    </form>
  );
}

export default UserGuess;
