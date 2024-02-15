function UserGuess({ handleUserInput }) {
  //TODO: handle only number

  const handleSubmit = (e) => {
    console.log("submit button click");
    e.preventDefault(); //Prevent the form from submitting
    handleUserInput(e.target.elements.userInput.value);
    console.log(e.target.elements.userInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Guess a 4-digit number:</label>
      <input
        type="text"
        id="userInput"
        maxLength="4"
        pattern="\d{4}"
        required
        // onChange={(e) => handleUserInput(e.target.value)}
      ></input>
      <button type="submit">Submit Guess</button>
    </form>
  );
}

export default UserGuess;
