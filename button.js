import React from "react"
import "./button.css"

export default function Button(props) {
    return (
        <div>
            <button className="button" onClick={props.exec}>{props.bText}</button>
        </div>
        
    )
}