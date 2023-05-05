import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
import { checkWinner } from './Button'
const root = ReactDOM.createRoot(document.getElementById('root'));

function handler () {
   // checkWinner();
    console.log("Clicked on the index ");

}
root.render(
  <React.StrictMode>
      <div className={"intro"}>
            <App/>
      </div>

    <div className={"tabuleiros"}>
        <div className={"grid-container"}>
            <div className={"grid"} id={"t1"}> <Button id={"tab1"}/> </div>
            <div className={"grid"} id={"t2"}> <Button  id={"tab2"}/> </div>
            <div className={"grid"} id={"t3"}> <Button  id={"tab3"}/> </div>
            <div className={"grid"} id={"t4"}> <Button  id={"tab4"}/> </div>
            <div className={"grid"} id={"t5"}> <Button  id={"tab5"}/> </div>
            <div className={"grid"} id={"t6"}> <Button  id={"tab6"}/> </div>
            <div className={"grid"} id={"t7"}> <Button  id={"tab7"}/> </div>
            <div className={"grid"} id={"t8"}> <Button  id={"tab8"}/> </div>
            <div className={"grid"}id={"t9"}> <Button  id={"tab9"}/> </div>

        </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
