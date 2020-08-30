import React, {useState} from 'react';
import './style.css';

function Enz() {
  const [cls1, setCls1] = useState("invisible");
  const [cls2, setCls2] = useState("invisible");
  const click1 = () =>{cls1==="visible"? setCls1("invisible"): setCls1("visible")}
  const click2 = () =>{cls2==="visible"? setCls2("invisible"): setCls2("visible")}

  return (
   <div className="center">
      <div className="ins">     
      How was this website tested? 
      </div>
      <div>
        <button id='btn1' onClick={click1}>
              The component is rendered.
        </button><br />                  
        <img src='./testing1.png'
            className={cls1}/>
      </div>      

      <div>
        <button onClick={click2}>
             The state is set on click event.
        </button><br />             
        <img src='./testing2.png'   
            className={cls2}/>      
      </div>  
   </div>
  );
}

export default Enz;
