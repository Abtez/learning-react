import React, {useState, useEffect} from 'react';
import './practise.css'

const ShortCircuit = () => {

    const [text, setText] = useState('')
    const firstValue = text || 'hello world';
    const secondValue = text && 'hello world';
    const [isError, setIsError] = useState(false)

    return (
        // <div>
        //     <h1>{firstValue}</h1>
        //     <h1>Vaue : {secondValue} </h1>
        // </div>

        <div className="container">
            <h2> {text || 'Abzedizo'} </h2>
            <button onClick={()=> setIsError(!isError)} className="btn btn-success">Toggle Error</button>

            {isError && <h2>Error...</h2>}

            {isError ? <p>Ternary Operator</p> : <div>
                <h2>there is no error</h2>
            </div>} 

            {text && <h2>Hello World</h2>}
            {!text && <h2>Hello World</h2>}

        </div>

    )
}

export default ShortCircuit;