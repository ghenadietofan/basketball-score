import React,{useState} from 'react'
import './score.css';
const Score = (props) => {
    
    const increment=()=>{
      props.set(props.val+1);
    }
    const decrement=()=>{
      if(props.val>0)props.set(props.val-1);
      else props.set(0);   
    }
  return (
    <div className={props.className}>
      <button className="btn" onClick={decrement}>-</button>
      <h1 className="score">{props.val}</h1>
      <button className="btn" onClick={increment}>+</button>
      </div>
  )
}
export default Score;