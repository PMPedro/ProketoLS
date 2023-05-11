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


        buttonId = event.target.id
        qualUser = user%2;

        if(qualUser === 0){
            event.target.textContent = "X"
            event.target.disabled = true
        }else if(qualUser === 1) {
            event.target.textContent = "O"
            event.target.disabled = true
        }
        console.log("play detected")
        checkWinner(props)
    }

    function checkWinner (props) {

        let idgetter = props.id;
        let parentid;

        if(idgetter === "tab1") {   parentid = document.getElementById("t1")    }
        if(idgetter === "tab2") {   parentid = document.getElementById("t2")    }
        if(idgetter === "tab3") {   parentid = document.getElementById("t3")    }
        if(idgetter === "tab4") {   parentid = document.getElementById("t4")    }
        if(idgetter === "tab5") {   parentid = document.getElementById("t5")    }
        if(idgetter === "tab6") {   parentid = document.getElementById("t6")    }
        if(idgetter === "tab7") {   parentid = document.getElementById("t7")    }
        if(idgetter === "tab8") {   parentid = document.getElementById("t8")    }
        if(idgetter === "tab9") {   parentid = document.getElementById("t9")    }

        let bt1 = parentid.querySelector("#bt1");
        let bt2 = parentid.querySelector("#bt2");
        let bt3 = parentid.querySelector("#bt3");
        let bt4 = parentid.querySelector("#bt4");
        let bt5 = parentid.querySelector("#bt5");
        let bt6 = parentid.querySelector("#bt6");
        let bt7 = parentid.querySelector("#bt7");
        let bt8 = parentid.querySelector("#bt8");
        let bt9 = parentid.querySelector("#bt9");


        //console.log("hier " + box + " " + props.id);

        console.log("Jogada-> " + props.id + "tab(exemplo, para saber qual e) " + bt1);
        console.log(props.target)
        //bt1.textContent = "P"



        //ganhar em linha
        if(bt1.textContent === "X" && bt2.textContent === "X" && bt3.textContent === "X" )
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props, "X")

        }

        if(bt4.textContent === "X" && bt5.textContent === "X" && bt6.textContent === "X"   )
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")

        }

        if((bt7.textContent === "X" && bt8.textContent === "X" && bt9.textContent === "X" ))
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")

        }
        if(bt7.textContent === "O" && bt8.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }
        if(bt4.textContent === "O" && bt5.textContent === "O" && bt6.textContent === "O") {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }
        if( bt1.textContent === "O" && bt2.textContent === "O" && bt3.textContent === "O" ){
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }

        //ganhar em coluna
        if(bt1.textContent === "X" && bt4.textContent === "X" && bt7.textContent === "X" )
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")

        }
        if(bt2.textContent === "X" && bt5.textContent === "X" && bt8.textContent === "X" )
        { console.log("Winner");
            winner(props,"X")
            console.log("Winner", props.id);

        }
        if(bt3.textContent === "X" && bt6.textContent === "X" && bt9.textContent === "X" )
        { console.log("Winner");
            winner(props,"X")
            console.log("Winner", props.id);

        }

        if(bt1.textContent === "O" && bt4.textContent === "O" && bt7.textContent === "O" ) {
            console.log("Winner");
            winner(props,"O")
            console.log("Winner", props.id);

        }
        if(bt2.textContent === "O" && bt5.textContent === "O" && bt8.textContent === "O" ) {
            console.log("Winner");
            winner(props,"O")
            console.log("Winner", props.id);
        }
        if (bt3.textContent === "O" && bt6.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }

        //ganhar nas verticais
        if(bt1.textContent === "X" && bt5.textContent === "X" && bt9.textContent === "X" )
        {  console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")

        }
        if(bt3.textContent === "X" && bt5.textContent === "X" && bt7.textContent === "X" )
        {  console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")

        }

        if(bt1.textContent === "O" && bt5.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }
        if(bt3.textContent === "O" && bt5.textContent === "O" && bt7.textContent === "O" ){
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")

        }
    }

    function winner (props, a) {

        let tab = props.id ;
        let helper;
        console.log(tab)
        if(tab ==="tab1"){
            helper = document.getElementById("t1")
            helper.textContent = a;
        }

        else if(tab ==="tab2"){
            helper = document.getElementById("t2")
            helper.textContent = a;
        }

        else if(tab ==="tab3"){
            helper = document.getElementById("t3")
            helper.textContent = a;
        }

        else if(tab ==="tab4"){
            helper = document.getElementById("t4")
            helper.textContent = a;
        }

        else if(tab ==="tab5"){
            helper = document.getElementById("t5")
            helper.textContent = a;
        }

        else if(tab ==="tab6"){
            helper = document.getElementById("t6")
            helper.textContent = a;
        }

        else if(tab ==="tab7"){
            helper = document.getElementById("t7")
            helper.textContent = a;
        }

        else if(tab ==="tab8"){
            helper = document.getElementById("t8")
            helper.textContent = a;
        }

        else if(tab ==="tab9"){
            helper = document.getElementById("t9")
            console.log("Winner")
            helper.textContent = a;
        }
    }


  return (
    <div className='Button'>
        <div className="grid-container">
            <div className="grid-item">  <button id={"bt1"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt2"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt3"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt4"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt5"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt6"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt7"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt8"} onClick={XouO}>     </button>   </div>
            <div className="grid-item">  <button id={"bt9"} onClick={XouO}>     </button>   </div>
        </div>
    </div>
  );
}
export default Button;
