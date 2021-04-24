import React, {useState} from 'react';
import './practise.css'

const ControlledInput = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {id:new Date().getTime().toString(), firstName, email}
            setPeople((people) => {
                return [...people,person]
            });
            setFirstName('');
            setEmail('')
        }
        else{
            console.log("empty");
        }
        
    }

    return(
        <article className="container">
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control mt-3 mb-3">
                <label htmlFor="firstName">Name : </label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <button className="btn btn-outline-success btn-sm mt-2" type="submit">Add Person</button>

        </form>

        {people.map((person) => {
            const {id, firstName, email} =person;
            return (
                <div className="mt-3">
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                    <p className="text-muted"><small>{id}</small></p>
                </div>
            )
        })}

        </article>
    )
};

export default ControlledInput;