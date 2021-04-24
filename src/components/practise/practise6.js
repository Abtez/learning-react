import React, {useState, useEffect} from 'react';
import './practise.css'

const ShowHide = () => {
    const [show, setShow] = useState(false)
    return(
        <div className="container">
            <button className="btn btn-secondary mt-3" onClick={()=>{setShow(!show)}}>Show/Hide Component</button>
            {show && <Item />}
        </div>
    )
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, []);
    return(
        <div className="container">
            <h2>window</h2>
            <h3>size : {size}px </h3>
        </div>
    )
};

export default ShowHide;