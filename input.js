import React from "react"
import "./input.css"

export default function Input(props) {
    return (
        <div className="input-div">
            <input className="input" disabled value={props.number}/>
        </div>
    )    
}