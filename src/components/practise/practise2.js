import React, {useEffect, useState} from 'react';
import './practise.css'

const UseEffectBasic = () => {
    const [value, setValue] = useState(0);

    useEffect( () => {
        if (value >= 1){
            document.title = `Notifications(${value})`;
        }
        
    },[value]);    

    return(
        <section>
        <div>

        <h2>counter</h2>
        <h1> { value } </h1>
            
        </div>            
            <button onClick={() => setValue(value+1)} className="btn btn-outline-secondary">Click Me</button>

        </section>
    )
}

export default UseEffectBasic;
