import React, {useState} from 'react';
import './practise.css'

const ShortCircuit = () => {

    const text = useState('')
    const [isError, setIsError] = useState(false)

    return (
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