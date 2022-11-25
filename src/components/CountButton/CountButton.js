import React, {useState} from "react"
import './CountButton.css'

const CountButton = (props) =>{

    const [currntCount, setCurrentCount] = useState(0)
    
    const handleClick = () =>{
        setCurrentCount(currntCount + props.incrementBy)
    }

    const buttonStyles = {
        background : props.buttonColor,
        borderRadius: "10px"
    }

    return(
    <div>
        <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
        <div className="count-display">{currntCount}</div>
    </div>
    )

}

export default CountButton

