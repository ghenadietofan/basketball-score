import React from 'react'
import Score from './Score';
import './Team.css'
export const Team = (props) => {

    return (
    <div className="container">
        <div className="name">{props.name}</div>
        <Score className="score" val={props.score} set={props.setScore} /><br></br>
        <Score className="faults" val={props.faults} set={props.setFaults} />
    </div>
  )

}
export default Team;