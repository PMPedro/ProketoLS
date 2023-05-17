    import React, { useState, useEffect } from 'react';

    const Timer = () => {
        const [timer1, setTimer1] = useState({ seconds: 1600, isActive: false });
        const [timer2, setTimer2] = useState({ seconds: 1600, isActive: false });
        const [timer3, setTimer3] = useState({ seconds: 10000, isActive: true });




        const startTimer = (timer) => {
            if (!timer.isActive && timer.seconds > 0) {
                if (timer === timer1) {
                    setTimer1((prevTimer) => ({ ...prevTimer, isActive: true }));
                } else if (timer === timer2) {
                    setTimer2((prevTimer) => ({ ...prevTimer, isActive: true }));
                } else if (timer === timer3) {
                    setTimer3((prevTimer) => ({ ...prevTimer, isActive: true }));
                }
            }
        };

        const stopTimer = (timer) => {
            if (timer.isActive) {
                if (timer === timer1) {
                    setTimer1((prevTimer) => ({ ...prevTimer, isActive: false }));
                } else if (timer === timer2) {
                    setTimer2((prevTimer) => ({ ...prevTimer, isActive: false }));
                } else if (timer === timer3) {
                    setTimer3((prevTimer) => ({ ...prevTimer, isActive: false }));
                }
            }
        };

        const resetTimer = (timer) => {
            if (!timer.isActive) {
                if (timer === timer1) {
                    setTimer1({ seconds: 10, isActive: false });
                } else if (timer === timer2) {
                    setTimer2({ seconds: 20, isActive: false });
                } else if (timer === timer3) {
                    setTimer3({ seconds: 30, isActive: false });
                }
            }
        };

        useEffect(() => {
            let intervalId1;
            let intervalId2;
            let intervalId3;

            if (timer1.isActive && timer1.seconds > 0) {
                intervalId1 = setInterval(() => {
                    setTimer1((prevTimer) => ({
                        ...prevTimer,
                        seconds: prevTimer.seconds - 1
                    }));
                }, 1000);
            }

            if (timer2.isActive && timer2.seconds > 0) {
                intervalId2 = setInterval(() => {
                    setTimer2((prevTimer) => ({
                        ...prevTimer,
                        seconds: prevTimer.seconds - 1
                    }));
                }, 1000);
            }

            if (timer3.isActive && timer3.seconds > 0) {
                intervalId3 = setInterval(() => {
                    setTimer3((prevTimer) => ({
                        ...prevTimer,
                        seconds: prevTimer.seconds - 1
                    }));
                }, 1000);
            }

            let user1 = document.getElementById("playerOneName");
            let user2 = document.getElementById("playerTwoName");
            let state = user1.textContent.includes("1");
          //  console.log(state);
            if(state) {
            if(user1.style.color !== 'red')
            {
                startTimer(timer1);
                stopTimer(timer2)

            }else if(user2.style.color !== 'blue') {
                startTimer(timer2)
                stopTimer(timer1)   }
            }


            //console.log(user1.style.color);


            return () => {
                clearInterval(intervalId1);
                clearInterval(intervalId2);
                clearInterval(intervalId3);
            };
        }, [timer1.isActive, timer1.seconds, timer2.isActive, timer2.seconds, timer3.isActive, timer3.seconds]);


    return (
        <div className={"timer"}>
            <div className={"firstTimer"} id={"firstTimer"}>
                {timer1.seconds}
            </div>
            <div className={"secondTimer"} id={"secondTimer"}>
                {timer2.seconds}

            </div>

        </div>
    )}

export default Timer;


