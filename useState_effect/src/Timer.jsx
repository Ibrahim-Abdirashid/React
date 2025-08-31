import { useState, useEffect } from "react";

const Timer= ()=>{
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false)

useEffect(()=>{
    let timerId;
    if(isRunning){
     timerId= setInterval(() => {
             setTime((prev)=> prev +1)
         }, 1000);

    }


    return()=> clearInterval(timerId)
}, [isRunning])

const handleStart= ()=>{
    setIsRunning(true)
}
const handleStop = ()=>{
    setIsRunning(false)
}
const handleReset = ()=>{
    setIsRunning(false);
    setTime(0)
}
return(
    <div>
        <h1>stop watching {time} seconds</h1>
        <button disabled={isRunning} onClick={handleStart}>start</button>
        <button disabled={!isRunning} onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
)
}

export default Timer;