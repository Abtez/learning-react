import React, {useState} from 'react';
import './practise.css'

const StateCount = () => {
    const [value, setValue] = useState(0)

    const delayedIncrease = () => {
        setTimeout( () => {
            setValue( (prevState) => {
                return prevState + 1;
            });
        },2000);
    };


    return(
        <section>
        <div className='counter'>

        <h2>counter</h2>
        <h1> { value } </h1>
            
        </div>            
            <button onClick={() => {setValue(value-1)}} className="btn btn-outline-secondary">Decrease</button>
            <button onClick={() => {setValue(0)}} className="btn btn-outline-warning ml-2">Reset</button>
            <button onClick={() => {setValue(value+1)}} className="btn btn-outline-primary ml-2">Increase</button>
            <div className="delay">
                <button onClick={delayedIncrease} className="btn btn-outline-dark mt-2"> Delayed Increase</button>
            </div>
        </section>
    )
}

export default StateCount;