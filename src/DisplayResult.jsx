import Block from "./Block";

function DisplayResult ({secretNumber, userWin}){

  let secretNumberStr = String(secretNumber?.secretNumber)

  return (
    <>
      {userWin ? 
      <div className="congratsMessage">CONGRATS</div>
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