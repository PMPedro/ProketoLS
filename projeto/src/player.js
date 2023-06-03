import './Css/player.css';
import React from 'react';
import { frisrplayercolors } from "./Button";

function player() {

    function doStuff() {
        let bt1 = document.getElementById("pPlayerOneName")
        let bt2  = document.getElementById("pPlayerTwoName")
        let bt3 = document.getElementById(("pPlayersNamesSubmit"))
        let bt4 = document.getElementById("playerOneName")
        let bt5 =document.getElementById("playerTwoName")
        if((bt1.value === "") || (bt2.value === "")){
            console.log("Error, no data")
        }else {
            console.log("done")
            const elements = document.getElementsByClassName("tabuleiros");

            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "flex";
            }
            bt1.style.display = "none"
            bt2.style.display = "none"
            bt3.style.display = "none"
            bt4.textContent = "Jogador 1: " + bt1.value
            bt5.textContent = "Jogador 2: " +  bt2.value
        }
        frisrplayercolors()
    }

    return (
        <div className={"player"}>
            <input type={"text"} id={"pPlayerOneName"} placeholder={"Player 1 Name"}/>
            <br/>
            <input type={"text"} id={"pPlayerTwoName"} placeholder={"Player 2 Name"}/>
            <br/>
            <button id={"pPlayersNamesSubmit"} onClick={doStuff}>Submit</button>

            <div className={"playerOneName"} id={"playerOneName"}>
            </div>
            <div className={"playerTwoName"} id={"playerTwoName"}>
            </div>
            <div className={"bigTabWinnerAnounce"} id={"bigTabWinnerAnounce"}>

            </div>
        </div>


    )}

export default player;

