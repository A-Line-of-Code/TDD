import React, {useState} from 'react';
import './home.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
    setPassword(resultArr.join(""));
  }

  return (
    <div id="homeDiv">              
      
      <div id="resultSpan">
      <CopyToClipboard text={password} id="copy">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path d="M4.85 11.15l6.3-6.3" overflow="visible" fill="none" stroke="gray" stroke-width="1.463"/>
      <path d="M12.152 0a1.984 1.984 0 0 0-.33.04c-.867.173-1.42.78-1.898 1.26L8.487 2.738c-.48.48-1.087 1.03-1.26 1.898-.075.37-.044.76.096 1.167l1.77-1.77c.102-.113.215-.23.337-.352l1.437-1.435c.48-.48.886-.83 1.217-.896a.877.877 0 0 1 .277-.01c.313.034.738.245 1.398.905.88.88.96 1.342.895 1.673-.066.33-.417.736-.896 1.216L12.32 6.57c-.124.123-.242.237-.356.34l-1.767 1.77c.407.14.797.17 1.168.096.867-.173 1.42-.78 1.898-1.26l1.437-1.44c.48-.48 1.087-1.03 1.26-1.898.174-.867-.223-1.84-1.26-2.878C13.923.522 13.18.105 12.492.017a2.125 2.125 0 0 0-.34-.016zM4.965 7.19a1.984 1.984 0 0 0-.33.038c-.867.174-1.42.782-1.898 1.26L1.3 9.925c-.48.48-1.087 1.03-1.26 1.898-.174.868.223 1.842 1.26 2.88 1.037 1.035 2.01 1.432 2.878 1.26.867-.175 1.42-.783 1.898-1.262l1.437-1.436c.48-.48 1.087-1.03 1.26-1.898.075-.37.044-.76-.096-1.168l-1.765 1.765c-.104.114-.218.233-.342.357l-1.437 1.437c-.48.48-.886.83-1.217.895-.33.066-.793-.016-1.673-.895-.88-.88-.96-1.343-.895-1.673.066-.33.417-.737.896-1.216L3.68 9.43c.124-.122.24-.236.355-.34l1.767-1.767a2.498 2.498 0 0 0-.497-.12 2.125 2.125 0 0 0-.34-.015z" fill="gray"/>
      </svg>
      </CopyToClipboard> &nbsp;
      {password} 
      </div>      
      <br/>
      <label for="length">length</label><br/>
      <input type="range" name="length" value={len} min="8" max="12" onChange={rangeval} id="input-range"></input> &nbsp;
      <input type="number" min="8" max="12" value={len} onChange={rangeval} id="input-number"></input>
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

