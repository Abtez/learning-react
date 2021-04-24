import React, { useState,useEffect } from 'react';
import "./countbtn.css";

const CountBtn = (props) => {

    const [currentCount,setCurrentCount] = useState(0)

    const handleCLick = () => {
        setCurrentCount(currentCount + props.incrementBy)
        
    }

    const divStyle = {
        display:'none',
        color: 'blue',
    }

    const buttonCOlor = {
        background : props.buttonColor,
    }

    useEffect(() => {
        if (currentCount === 20){
            setCurrentCount(0)
        }
    }, [currentCount])

    return <div style={ divStyle }>
        <button style={buttonCOlor} onClick={handleCLick} type="btn" className="btn btn-outline-success">{ props.incrementBy }</button>
        <div className="countdisplay">
            { currentCount }
        </div>
    </div>

}

export default CountBtn
