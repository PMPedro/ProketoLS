import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className={"intro"}>
            <App />
      </div>
    <div className={"tabuleiros"}>
        <div className={"grid-container"}>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>
            <div className={"grid"}> <Button /> </div>

        </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
