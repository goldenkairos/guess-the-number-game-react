import Block from "./Block";

function DisplayResult({ secretNumber, userWin }) {
  let secretNumberStr = String(secretNumber?.secretNumber);
  console.log(secretNumberStr);

  return (
    <div className="message-container">
      {userWin ? (
        <div className="congratsMessage">          
          YOU GUESSED THE CORRECT NUMBER!
        </div>
      ) : (
        <div className="message-container">
          <div className="message"> Sorry! The secret number is: </div>
          <div className="display-result">
            {secretNumberStr.split("").map((digit, idx) => (
              <Block key={idx} number={digit} color="#538d4e" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayResult;
