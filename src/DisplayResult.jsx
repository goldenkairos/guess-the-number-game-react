import Block from "./Block";

function DisplayResult ({secretNumber, userWin}){

  let secretNumberStr = String(secretNumber?.secretNumber)
  console.log(secretNumberStr);

  return (
    <>
      {userWin ? 
      <div className="congratsMessage">GREAT JOB! YOU GUESSED THE CORRECT NUMBER!</div>
      :
      <div>
        <span className="message"> Sorry! The secret number is: </span>
        <div className="display-result">
          {secretNumberStr.split("").map((digit,idx) => (
            <Block 
              key={idx}
              number={digit}
              color="#538d4e"
            />
          ))}
        </div>
      </div>      
      }

    </>

  )

}

export default DisplayResult;