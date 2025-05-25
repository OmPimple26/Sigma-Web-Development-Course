import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
      {/* <h1>Title of the Card</h1> */}
      {/* <p>Description of the Card</p> */}
      <img src="https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg" alt="" width={307} style={{border: "2px solid red"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
