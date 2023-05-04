import React from 'react';
import './Css/tab.css';
import * as events from "events";


let user = 0;
let buttonId;
let qualUser ;
function XouO (event) {
user ++;
    buttonId = event.target.id
    qualUser = user%2;

    if(qualUser === 0){
        console.log("x");
        event.target.textContent = "X"
        event.target.disabled = true
    }else if(qualUser === 1) {
        event.target.textContent = "0"
        event.target.disabled = true
    }
}
function Button() {
  return (
    <div className='Button'>
        <div className="grid-container">
            <div className="grid-item">  <button id={"bt1"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt2"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt3"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt4"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt5"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt6"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt7"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt8"} onClick={XouO}> " " </button>   </div>
            <div className="grid-item">  <button id={"bt9"} onClick={XouO}> " " </button>   </div>


        </div>
    </div>
  );
}

export default Button;