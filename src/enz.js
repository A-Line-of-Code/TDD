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
        <button id='btn1' onClick={click1}>
              Elements are rendered.
        </button><br />                  
        <img src='./testing4.png'
            className={cls1}/>
      </div>      

      <div>
        <button onClick={click2}>
             OnChange event works.
        </button><br />             
        <img src='./testing5.png'   
            className={cls2}/>      
      </div>  

      <div>
        <button onClick={click3}>
             (Cypress) End-to-End testing
        </button><br />             
        <img src='./testing6.png'   
            className={cls3}/>      
      </div> 
   </div>
  );
}

export default Enz;
