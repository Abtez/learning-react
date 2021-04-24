import React, { useState } from 'react';
import "./booklist.css";

const Booklist = (props) => {

    const [text, setText] = useState('The new Title')

    const changeTitle = () => {
        if (text === title){
            setText('The New Title')
        }
        else setText(title)
    }

    const {img, title, author} = props.book;
    
    return(
        <article className="book">
        <img src={img} alt=""></img>
        <h5>{text}</h5>
        <h6 style={{color:'#617d98', fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h6>
        <button onClick={changeTitle} type="button" className="btn btn-dark ">Change Title</button>
        </article>
    )
}
 
export default Booklist;