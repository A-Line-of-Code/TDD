import React, {useState} from 'react';
import './home.css';

export const Home = () => {

   const [num, setNum] = useState(false);
   const [numRad, setNumRad] = useState("invisible");
   const [upNum, setUpNum] = useState(0);

   const [len, setLen] = useState(8);
   const [password, setPassword] = useState("password");

   const rangeval = event => {    
    setLen(event.target.value);
  }

   const checkNum = event => {     
      setNum(event.target.checked);
      numRad==="visible"? setNumRad("invisible"): setNumRad("visible");
   }

   const numUp = event => {    
    setUpNum(Number(event.target.value));
  }
  
  const arr = (low, high) => {
    const array = [];
      for (let i = low; i<= high; i++){
        array.push(i)
      }
    return array;
  }
    
  const chararr = arr(97, 122).concat(arr(65, 90));
  const numarr = arr(48,57);

  const pw = () =>{
    const resultArr = [];
    for(let i=0; i<len; i++){
      const result = chararr[Math.floor(Math.random()*chararr.length)];
      const resStr = String.fromCharCode(result);
      resultArr.push(resStr);
    }
    if(numRad==="visible"){
      for(let i=0; i<upNum; i++){
        let result = numarr[Math.floor(Math.random()*numarr.length)];
        let resStr = String.fromCharCode(result);
        resultArr.push(resStr);
      }
    }    
    setPassword(resultArr);
  }

  return (
    <div id="homeDiv">              
      
      <div id="resultSpan">{password}</div>
      <br/>
      <label for="length">length</label><br/>
      <input type="range" name="length" value={len} min="8" max="12" onChange={rangeval}></input> &nbsp;
      <input type="number" min="8" max="12" value={len} onChange={rangeval}></input>
      <br /><br />
      <div>
        <label>include number</label>
        <input id="num" type="checkbox" checked={num} onChange={checkNum} />
        
          <div className={numRad}>     
          <input type="radio" value="1" name="upper case" onChange={numUp}/> 1
          <input type="radio" value="2" name="upper case" onChange={numUp}/> 2
          <input type="radio" value="3" name="upper case" onChange={numUp}/> 3
          </div>
      </div>      
      <br />
      <button id="genBut" onClick={pw}>Generate</button>

    </div>  
  );
 
  }

