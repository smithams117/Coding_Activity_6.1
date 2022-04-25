import "./styles.css";
import { useState } from "react";

function Square({ id, player }) {
  const [color, setColor] = useState("red");
  const[mount,setMOunt]=useState(true)

  let palet = ["green", "yellow", "Green"];
  function getrandomcolor  () {
    setMOunt(!mount)
    return palet[Math.floor(Math.random() * 3)];
  };
  return (
    mount && <button
      onClick={(e) => {
        setColor(getrandomcolor());
        e.target.style.background = color;
      }}
    ><h1>{id}</h1></button>
  );
}

export default function App() {
  const [player, setPlayer] = useState(0);
  const [mount,setMount]=useState(true)
  
  let status = `Player ${player}`;

  function rendersquare(id) {
    return <Square id={id} player={player}></Square>;
  }
  
  function toggle(){
    setMount(!mount)
  }

  return (
    <>
    
    <div
    
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        { mount && rendersquare("+")}
        { mount && rendersquare("+")}
        { mount && rendersquare("+")}
        
      </div>
      <div>
        <h1>{status}</h1>
        <button onClick={toggle}>SHOW - HIDE</button>
      </div>
    </div>
    </>
  );
}