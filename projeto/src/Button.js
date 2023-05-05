import React from 'react';
import './Css/tab.css';
import * as events from "events";
import {tab} from "@testing-library/user-event/dist/tab";


let user = 0;
let buttonId;
let qualUser ;
let tabid;
let objetoTabId;


function Button(props) {

    function XouO (event) {
        user ++;
        tabid = props.id
        console.log(tabid)

//        if(props.id === "tab1") { objetoTabId = document.getElementById("t1"); }
  //      console.log(document.getElementById(objetoTabId))



        buttonId = event.target.id
        qualUser = user%2;

        if(qualUser === 0){
            event.target.textContent = "X"
            event.target.disabled = true
        }else if(qualUser === 1) {
            event.target.textContent = "O"
            event.target.disabled = true
        }
    }

    function checkWinner () {

        let bt1 = document.getElementById("bt1");
        let bt2 = document.getElementById("bt2");
        let bt3 = document.getElementById("bt3");
        let bt4 = document.getElementById("bt4");
        let bt5 = document.getElementById("bt5");
        let bt6 = document.getElementById("bt6");
        let bt7 = document.getElementById("bt7");
        let bt8 = document.getElementById("bt8");
        let bt9 = document.getElementById("bt9");

        //ganhar em linha
        if((bt1.textContent === "X" && bt2.textContent === "X" && bt3.textContent === "X" ) || (bt1.textContent === "O" && bt2.textContent === "O" && bt3.textContent === "O" ))
        { console.log("Winner");
            return true;
        }
        if((bt4.textContent === "X" && bt5.textContent === "X" && bt6.textContent === "X" ) || (bt4.textContent === "O" && bt5.textContent === "O" && bt6.textContent === "O" ))
        { console.log("Winner");
            return true ;
        }
        if((bt7.textContent === "X" && bt8.textContent === "X" && bt9.textContent === "X" ) || (bt7.textContent === "O" && bt8.textContent === "O" && bt9.textContent === "O" ))
        { console.log("Winner");
            return true;
        }

        //ganhar em coluna
        if((bt1.textContent === "X" && bt4.textContent === "X" && bt7.textContent === "X" ) || (bt1.textContent === "O" && bt4.textContent === "O" && bt7.textContent === "O" ))
        { console.log("Winner");
            return true;
        }
        if((bt2.textContent === "X" && bt5.textContent === "X" && bt8.textContent === "X" ) || (bt2.textContent === "O" && bt5.textContent === "O" && bt8.textContent === "O" ))
        { console.log("Winner");
            return true;
        }
        if((bt3.textContent === "X" && bt6.textContent === "X" && bt9.textContent === "X" ) || (bt3.textContent === "O" && bt6.textContent === "O" && bt9.textContent === "O" ))
        { console.log("Winner");
            return true;
        }

        //ganhar nas verticais
        if((bt1.textContent === "X" && bt5.textContent === "X" && bt9.textContent === "X" ) || (bt1.textContent === "O" && bt5.textContent === "O" && bt9.textContent === "O" ))
        { console.log("Winner");
            return true;
        }
        if((bt3.textContent === "X" && bt5.textContent === "X" && bt7.textContent === "X" ) || (bt3.textContent === "O" && bt5.textContent === "O" && bt7.textContent === "O" ))
        { console.log("Winner");
            return true;
        }
    }

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
