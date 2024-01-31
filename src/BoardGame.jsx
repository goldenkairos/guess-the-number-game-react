import { useState } from "react";
import Block from "./Block";

function BoardGame({ secretNumber }) {
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

  // return (
  //   // <div
  //   //   className="border border-black"
  //   //   style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
  //   // >
  //   <div className="border border-black h-screen flex justify-center items-center">
  //     {board.map((row, rowIndex) => (
  //       <div key={rowIndex} className="grid grid-cols-4 grid-rows-6 gap-4">
  //         {row.map((block, blockIndex) => (
  //           <Block
  //             key={blockIndex}
  //             number={block.number}
  //             color={block.status}
  //             secretNumber={secretNumber}
  //           />
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="board-container">
      <div className="grid-container">
        {board.map((row, rowIndex) =>
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
  );
}

export default BoardGame;
