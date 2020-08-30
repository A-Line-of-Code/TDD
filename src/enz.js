import React, {useState} from 'react';
import './style.css';

function Enz() {
  const [cls1, setCls1] = useState("invisible");
  const [cls2, setCls2] = useState("invisible");
  const [cls3, setCls3] = useState("invisible");
  const click1 = () =>{cls1==="visible"? setCls1("invisible"): setCls1("visible")}
  const click2 = () =>{cls2==="visible"? setCls2("invisible"): setCls2("visible")}
  const click3 = () =>{cls3==="visible"? setCls3("invisible"): setCls3("visible")}

  return (
   <div className="center">
      <div className="ins">     
      How was this website tested?
      </div>
      <div>
        <button onClick={click1}>
              components are rendered
        </button><br />    
        <img src='./img.png' height='300px'
            className={cls1 === "visible" ? "visible" : "invisible"}/>
      </div>

      <div>
        <button onClick={click2}>
              onClick event works
        </button><br />
        <img src='./img.png' height='300px'
            className={cls2 === "visible" ? "visible" : "invisible"}/>      
      </div>

      <div>
        <button onClick={click3}>
              class is toggled
        </button><br />
        <img src='./img.png'   
            className={cls3 === "visible" ? "visible" : "invisible"}/>      
      </div>
   </div>
  );
}

export default Enz;