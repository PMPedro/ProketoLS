import './Css/player.css';
import React from 'react';
function player() {
    function doStuff() {
        console.log("Hello")

    }

    return (
        <div className={"player"}>
            <input type={"text"} id={"pPlayerOneName"}/>
            <input type={"text"} id={"pPlayerTwoName"}/>
            <button onClick={doStuff}>Submit</button>
        </div>
    )}

export default player;
