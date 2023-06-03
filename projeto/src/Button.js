import React from 'react';
import './Css/tab.css';
import * as events from "events";
import {tab} from "@testing-library/user-event/dist/tab";

let user = Math.round(Math.random()) + 1;
let buttonId;
let qualUser ;
let tabid;
let objetoTabId;

export function frisrplayercolors() {
    let user1 = document.getElementById("playerOneName")
    let user2 =document.getElementById("playerTwoName")

    qualUser = user%2;
    if(qualUser === 0){
        user1.style.color = "white"
        user2.style.color = "blue"
    }else if(qualUser === 1) {
        user1.style.color = "red"
        user2.style.color = "white"
    }
}



function Button(props) {
    
    function XouO (event) {
        let user1 = document.getElementById("playerOneName")
        let user2 =document.getElementById("playerTwoName")
        let btCpu = document.getElementById("cpuXhumansSelector").textContent
        console.log(btCpu)
        //console.log(document.getElementById("firstTimer").textContent)


        let smallWinner;
        smallWinner = 1;
        tabid = props.id
        buttonId = event.target.id
        qualUser = user%2;

        if(qualUser === 0 || btCpu === "Computador"){
            user1.style.color = "red"
            user2.style.color = "white"
            event.target.style.color = "red"
            event.target.textContent = "X"
            event.target.disabled = true

            if(btCpu === "Computador"){
                console.log("CPU PLAYS")
                cpuPlay();
            }
        }else if(qualUser === 1 && btCpu === "Humanos") {
            user1.style.color = "white"
            user2.style.color = "blue"
            event.target.textContent = "O"
            event.target.style.color = "blue"
            event.target.disabled = true
        }
        console.log("play detected")
        smallWinner = checkWinner(props);

        console.log("winner var = " + smallWinner)
        if(smallWinner != 2){checkDraw(props)}

        checkBigTab()



        user ++;
    }

    function cpuPlay(){
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        let randomNumber2 = Math.floor(Math.random() * 9) + 1;
        let a ="t"+randomNumber;
        let tabDecider = document.getElementById(a);


        if(tabDecider.textContent === "X" || tabDecider.textContent === "O"  ||  tabDecider.textContent === "empate") {
           while (tabDecider.textContent === "X" || tabDecider.textContent === "O"  ||  tabDecider.textContent === "empate"){
               randomNumber = Math.floor(Math.random() * 9) + 1;
               a ="t"+randomNumber;
               tabDecider = document.getElementById(a);
           }
        }

        let b = "#bt" + randomNumber2;
        let bt = tabDecider.querySelector(b)

        if(bt.textContent === "X" || bt.textContent === "O") {
            while(bt.textContent === "X" || bt.textContent === "O") {
                randomNumber2 = Math.floor(Math.random() * 9) + 1;
                b = "#bt" + randomNumber2;
                bt = tabDecider.querySelector(b)

            }
        }
        bt.textContent = "O";

    }

    function checkCpuWin(){
        let num = 1;
        let id ="t"+num;
        let parent;


        while(num > 10){
            parent = document.getElementById(id)
            let bt1 = parent.querySelector("#bt1");
            let bt2 = parent.querySelector("#bt2");
            let bt3 = parent.querySelector("#bt3");
            let bt4 = parent.querySelector("#bt4");
            let bt5 = parent.querySelector("#bt5");
            let bt6 = parent.querySelector("#bt6");
            let bt7 = parent.querySelector("#bt7");
            let bt8 = parent.querySelector("#bt8");
            let bt9 = parent.querySelector("#bt9");

            if(bt7.textContent === "O" && bt8.textContent === "O" && bt9.textContent === "O" ) {
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2;

            }
            if(bt4.textContent === "O" && bt5.textContent === "O" && bt6.textContent === "O") {
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2;

            }
            if( bt1.textContent === "O" && bt2.textContent === "O" && bt3.textContent === "O" ){
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2;

            }

            if(bt1.textContent === "O" && bt4.textContent === "O" && bt7.textContent === "O" ) {
                console.log("Winner");
                winnerCpu(parent,"O")
                console.log("Winner", props.id);
                return 2;

            }
            if(bt2.textContent === "O" && bt5.textContent === "O" && bt8.textContent === "O" ) {
                console.log("Winner");
                winnerCpu(parent,"O")
                console.log("Winner", props.id);
                return 2;
            }
            if (bt3.textContent === "O" && bt6.textContent === "O" && bt9.textContent === "O" ) {
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2;

            }

            if(bt1.textContent === "O" && bt5.textContent === "O" && bt9.textContent === "O" ) {
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2 ;

            }
            if(bt3.textContent === "O" && bt5.textContent === "O" && bt7.textContent === "O" ){
                console.log("Winner");
                console.log("Winner", props.id);
                winnerCpu(parent,"O")
                return 2;

            }
            num++;
            id= "t"+num;
        }




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
            return 2;

        }

        if(bt4.textContent === "X" && bt5.textContent === "X" && bt6.textContent === "X"   )
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")
            return 2;

        }

        if((bt7.textContent === "X" && bt8.textContent === "X" && bt9.textContent === "X" ))
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")
            return 2;

        }
        if(bt7.textContent === "O" && bt8.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2;

        }
        if(bt4.textContent === "O" && bt5.textContent === "O" && bt6.textContent === "O") {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2;

        }
        if( bt1.textContent === "O" && bt2.textContent === "O" && bt3.textContent === "O" ){
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2;

        }

        //ganhar em coluna
        if(bt1.textContent === "X" && bt4.textContent === "X" && bt7.textContent === "X" )
        { console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")
            return 2;

        }
        if(bt2.textContent === "X" && bt5.textContent === "X" && bt8.textContent === "X" )
        { console.log("Winner");
            winner(props,"X")
            console.log("Winner", props.id);
            return 2;

        }
        if(bt3.textContent === "X" && bt6.textContent === "X" && bt9.textContent === "X" )
        { console.log("Winner");
            winner(props,"X")
            console.log("Winner", props.id);
            return 2;

        }

        if(bt1.textContent === "O" && bt4.textContent === "O" && bt7.textContent === "O" ) {
            console.log("Winner");
            winner(props,"O")
            console.log("Winner", props.id);
            return 2;

        }
        if(bt2.textContent === "O" && bt5.textContent === "O" && bt8.textContent === "O" ) {
            console.log("Winner");
            winner(props,"O")
            console.log("Winner", props.id);
            return 2;
        }
        if (bt3.textContent === "O" && bt6.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2;

        }

        //ganhar nas verticais
        if(bt1.textContent === "X" && bt5.textContent === "X" && bt9.textContent === "X" )
        {  console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")
            return 2;

        }
        if(bt3.textContent === "X" && bt5.textContent === "X" && bt7.textContent === "X" )
        {  console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"X")
            return 2;

        }

        if(bt1.textContent === "O" && bt5.textContent === "O" && bt9.textContent === "O" ) {
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2 ;

        }
        if(bt3.textContent === "O" && bt5.textContent === "O" && bt7.textContent === "O" ){
            console.log("Winner");
            console.log("Winner", props.id);
            winner(props,"O")
            return 2;

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


    function winnerCpu (tabid, a) {

        let tab = tabid;
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




    function checkDraw (props){

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

        if((idgetter.textContent !== 'X') || (idgetter.textContent !== 'O')){
            if(
                ( bt1.textContent === 'X' || bt1.textContent === 'O' ) &&
                ( bt2.textContent === 'X' || bt2.textContent === 'O' ) &&
                ( bt3.textContent === 'X' || bt3.textContent === 'O' ) &&
                ( bt4.textContent === 'X' || bt4.textContent === 'O' ) &&
                ( bt5.textContent === 'X' || bt5.textContent === 'O' ) &&
                ( bt6.textContent === 'X' || bt6.textContent === 'O' ) &&
                ( bt7.textContent === 'X' || bt7.textContent === 'O' ) &&
                ( bt8.textContent === 'X' || bt8.textContent === 'O' ) &&
                ( bt9.textContent === 'X' || bt9.textContent === 'O' )
            ){
                parentid.textContent = "empate";
            }}
    }

    function checkBigTab() {

        let t1 = document.getElementById("t1")
        let t2 = document.getElementById("t2")
        let t3 = document.getElementById("t3")
        let t4 = document.getElementById("t4")
        let t5 = document.getElementById("t5")
        let t6 = document.getElementById("t6")
        let t7 = document.getElementById("t7")
        let t8 = document.getElementById("t8")
        let t9 = document.getElementById("t9")

        //Verticais
        if((t1.textContent === 'X' && t2.textContent ==='X' && t3.textContent === 'X'))
        {
            posVencedor(1,"X")
        }

        else if((t1.textContent === 'O' && t2.textContent ==='O' && t3.textContent === 'O')){
            posVencedor(1,"O")

        }
        else if((t4.textContent === 'X' && t5.textContent ==='X' && t6.textContent === 'X'))
        {
            posVencedor(1,"X");
        }
        else if((t4.textContent === 'O' && t5.textContent ==='O' && t6.textContent === 'O')) {
            posVencedor(1,"O")

        }
        else if((t7.textContent === 'X' && t8.textContent ==='X' && t9.textContent === 'X') )
        { posVencedor(1,"X"); }
        else if((t7.textContent === 'O' && t8.textContent ==='O' && t9.textContent === 'O')){posVencedor(1,"O")}

        //Horizontais
        else if((t1.textContent === 'X' && t4.textContent ==='X' && t7.textContent === 'X'))
        {posVencedor(1,"X"); }
        else if((t1.textContent === 'O' && t4.textContent ==='O' && t7.textContent === 'O')){posVencedor(1,"O")}

        else if((t2.textContent === 'X' && t5.textContent ==='X' && t8.textContent === 'X'))
        { posVencedor(1,"X"); }

        else if((t2.textContent === 'O' && t5.textContent ==='O' && t8.textContent === 'O')){
            posVencedor(1,"O")
        }

        else if((t3.textContent === 'X' && t6.textContent ==='X' && t9.textContent === 'X') )
        { posVencedor(1,"X"); }

        else if((t3.textContent === 'O' && t6.textContent ==='O' && t9.textContent === 'O')){
            posVencedor(1,"O")
        }


        //Diagonais
        else if((t1.textContent === 'X' && t5.textContent ==='X' && t9.textContent === 'X') )
        { posVencedor(1,"X");
        }
        else if(t1.textContent === 'O' && t5.textContent ==='O' && t9.textContent === 'O'){
            posVencedor(1,"O")
        }

        else if((t3.textContent === 'X' && t5.textContent ==='X' && t7.textContent === 'X') )
        {
            posVencedor(1,"X");
        }

        else if((t3.textContent === 'O' && t5.textContent ==='O' && t7.textContent === 'O')){
            posVencedor(1,"O")
        }
        else if(
            ( t1.textContent === 'X' || t1.textContent === 'O' || t1.textContent === 'empate' ) &&
            ( t2.textContent === 'X' || t2.textContent === 'O' || t2.textContent === 'empate' ) &&
            ( t3.textContent === 'X' || t3.textContent === 'O' || t3.textContent === 'empate' ) &&
            ( t4.textContent === 'X' || t4.textContent === 'O' || t4.textContent === 'empate' ) &&
            ( t5.textContent === 'X' || t5.textContent === 'O' || t5.textContent === 'empate' ) &&
            ( t6.textContent === 'X' || t6.textContent === 'O' || t6.textContent === 'empate' ) &&
            ( t7.textContent === 'X' || t7.textContent === 'O' || t7.textContent === 'empate' ) &&
            ( t8.textContent === 'X' || t8.textContent === 'O' || t8.textContent === 'empate' ) &&
            ( t9.textContent === 'X' || t9.textContent === 'O' || t9.textContent === 'empate' )
        ) { posVencedor(0, 'Empate')}


        let timer1 = document.getElementById("firstTimer").textContent
        let timer2 = document.getElementById("secondTimer").textContent

        if(timer1 == 0 ){
            posVencedor(0, 'Jogador 2, por tempo')
        } else if( timer2 == 0){
            posVencedor(0, 'Jogador 1, por tempo')
        }




    }

    function posVencedor(numDecide, quem) {
        let anounceWinner = document.getElementById("bigTabWinnerAnounce")


        let countx = 0;
        let countO = 0;
       // console.log("verificar if "+quem)
        if(quem === 'Empate'){
            let i= 1;
                for(i; i<10;i++){
                    let id = "t" + i
                    let bt = document.getElementById(id).textContent
                    if(bt === 'X') {
                        countx++
                    } else if(bt === 'O'){
                        countO++
                    }
                }
                if(countx > countO) { quem = 'X, por mais tabuleiros ganhos!'}
                else if(countO > countx) { quem = 'O, por mais tabuleiros ganhos!'}
                else { quem = 'Empate, pois tem o mesmo numero de tabuleiros ganhos!'}
        }

        anounceWinner.textContent = "O vencedor e: " +  quem;

        document.getElementById("t1").style.display = "none"
        document.getElementById("t2").style.display = "none"
        document.getElementById("t3").style.display = "none"
        document.getElementById("t4").style.display = "none"
        document.getElementById("t5").style.display = "none"
        document.getElementById("t6").style.display = "none"
        document.getElementById("t7").style.display = "none"
        document.getElementById("t8").style.display = "none"
        document.getElementById("t9").style.display = "none"


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
