import React ,{useState} from "react";
import "./App.css"
import Block from "./components/Block";

function App(){
  const [state, setState] = useState(Array(9).fill(null));
  const [playerturn, setplayerturn] = useState("X");


  const checkWhowin = (state : any[]) =>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < win.length; i++){
      const [a,b,c] = win[i];
      if((state[a] !== null && state[a] === state[b] && state[a] === state[c])) return true ;
    }
    return false
  };
  const  Handlclick  = (index: number) => {
    console.log(index);
    const statecopy = Array.from(state)

    if(statecopy[index] !== null) return
    statecopy[index] = playerturn
    
    // check if someone win

    const win = checkWhowin(statecopy);

    if(win){
      alert(`${playerturn} wom the game`)
    }

    setplayerturn(playerturn === 'X' ? 'O' : 'X')
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