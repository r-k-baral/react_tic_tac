import React ,{useState} from "react";
import "./App.css"
import Block from "./components/Block";

function App(){
  const [state, setState] = useState(Array(9).fill(null));
  const [palayerturn, setpalayerturn] = useState("X");
  const  Handlclick  = (index: number) => {
    console.log(index);
    const statecopy = Array.from(state)
    statecopy[index] = palayerturn
    setpalayerturn(palayerturn === 'X' ? 'O' : 'X')
    setState(statecopy);
        
  };
  console.log(state);
  
  return( <div className="board">
      <div className="row">
          <Block onClick={()=>{Handlclick(0)}} value={state[0]}/>
          <Block onClick={()=>{Handlclick(1)}}value={state[1]}/>
          <Block  onClick={()=>{Handlclick(2)}}value={state[2]}/>
      </div>
      <div className="row">
          <Block onClick={()=>{Handlclick(3)}}value={state[3]}/>
          <Block  onClick={()=>{Handlclick(4)}}value={state[4]}/>
          <Block onClick={()=>{Handlclick(5)}} value={state[5]}/>
      </div>
      <div className="row">
          <Block onClick={()=>{Handlclick(6)}} value={state[6]}/>
          <Block onClick={()=>{Handlclick(7)}} value={state[7]}/>
          <Block  onClick={()=>{Handlclick(8)}} value={state[8]}/>
      </div>
  </div>)
}

export default App;