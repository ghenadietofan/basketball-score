import React,{useState,useEffect} from 'react'

export const Timer = () => {
    const [time,setTime]=useState({min:0,sec:0,millsec:0})
    const [run,setRun]=useState(false);
    function startStop() {
        setRun(!run);
        const interval = setInterval(()=>{

        })
    }
    return (
    <div className="timer">
        <div className="clock">
            
        </div>

        {/*<div className="timer-table">
            <button className="timer-control-btn" onClick={start()}onKeyPress={someFun()}>start</button>

    </div>*/}
    </div>
  )
}
export default Timer;;
