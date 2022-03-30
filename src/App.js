import React,{useState} from 'react'
import Team from './Components/Team';
import Timer from 'react-compound-timer';
import audio from './videoplayback.mp3';
import "./App.css";
export const App = () => {
  const [score1,setScore1]=React.useState(0);
  const [score2,setScore2]=React.useState(0);
  const [faults1,setFaults1]=React.useState(0);
  const [faults2,setFaults2]=React.useState(0);
  const [name1,setName1]=React.useState("");
  const [name2,setName2]=React.useState("");
  const [name,setName]=React.useState(false);
  const [period,setPeriod]=React.useState(1);
  
  const [play,setPlay]=useState(false);
  const increment=()=>{setPeriod(period+1)}
  function get_name(){
    let name1=prompt("Numele echipei I")
    let name2=prompt("Numele echipei II")
    setName1(name1);
    setName2(name2);
    setName(true);
    console.log(name);
  }
  const init=()=>{
    setScore1(0);
    setScore2(0);setPeriod(1);
    setFaults1(0);setFaults2(0);
    setPlay(false);
  }
  return (
    <div id="container" >
      {name?"":get_name()}
      <Team className="team1"
            name={name1} 
            score={score1}
            setScore={setScore1}
            faults={faults1}
            setFaults={setFaults1}
             />
        <div id="timer">
        <Timer
    initialTime={600000}
    startImmediately={false}
    direction="backward"
    timeToUpdate={10}
    checkpoints={[{
      time:0,callback:()=>{
        console.log("time's up!");
        console.log(period);
        var audio =document.getElementById('audio');
        console.log(audio);
        audio.play();
        
      }
    }]}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div className="clock">
                
                
                <div className="min"><Timer.Minutes /> :
                <Timer.Seconds /></div> 
                <div className="msec">
                <Timer.Milliseconds />
                </div> 
            </div>
            <div></div>
            <br />
            <div>
                <button className="btn-control" onClick={()=>{setPlay(!play);play?stop():start()}}>{!play?"Start":"Stop"}</button>
                <button className="btn-control" onClick={reset}>Reset</button>
                <button className="btn-control" onClick={()=>{setPlay(false);increment();reset();}}>End</button>
            </div>
        </React.Fragment>
    )}
</Timer>
<div className="period"><h1>{period}</h1>
<button className="reset" onClick={init}>Restart</button>
</div>
      
        </div>
         <Team className="team2"
            name={name2}
            score={score2}
            setScore={setScore2}
            faults={faults2}
            setFaults={setFaults2}
            />
      <audio src={audio}id="audio"></audio>
    </div>
    
    
  )
}
export default App;