import React, {useEffect, useState} from 'react';
import './practise.css'

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect( () => {
        window.addEventListener('resize',checkSize);
        return () => {
            window.removeEventListener('resize', checkSize)
        }
        },[] 
    ); 
    return (
        <div>
        <h2>Windows Size</h2>
        <h3>{size} px</h3>
        </div>
    )
}

export default UseEffectCleanUp;