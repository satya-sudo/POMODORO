import React,{useState,useEffect} from 'react';
import useSound from 'use-sound';

import chime from './sounds/chime.mp3';

import './styles/SandGlass.css';

import ProgressBar from "@ramonak/react-progress-bar";


const Timer = (props) => {
    const {startMinute,setCount,count} = props;
    const [minutes,setMinutes] = useState(startMinute);
    const [seconds,setSeconds] = useState(0);
    const [play] =  useSound(chime);
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        if(seconds === 0 && minutes === 0){
            setMinutes(startMinute);
            setSeconds(0);
            console.log(count);
            // play();
        }
    },[startMinute]);


    useEffect(() => {
        const interval = setInterval(()=>{
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                    setCount(count+1)
                } else {
                    if (count%2===0){
                        setProgress(100- ((minutes-1)/25 )*100);
                    } else {
                        setProgress(100-((minutes-1)/5 )*100);
                    }   
                    console.log(progress);
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            };

        },1000);

        return ()=> {
            clearInterval(interval);
        };




    },[minutes,seconds,count,startMinute,setCount]);

    return (
        <div className="center-align">
            <h1>{minutes < 10 ? `0${minutes}`:minutes}:{seconds<10? `0${seconds}`:seconds}</h1> 
            {/* <SandGlass  count={count} minutes={minutes} /> */}
            <div className="center">
                <ProgressBar completed={progress} labelAlignment="center" bgColor="#" customLabel={count%2===0?"Keep Pushing":"Relax"} height="40px" width="100%" borderRadius="0px"/>
            </div>
        </div>
    )
};

export default Timer;

