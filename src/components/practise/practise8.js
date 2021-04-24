import React, {useState, useEffect} from 'react';
import './practise.css'

const MultipleInputs = () => {

    const [person,setPerson] = useState({firstName:'',secondName:'',age:'',email:''})
    const [people, setPeople] = useState([])

    const handleOnchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.secondName && person.age && person.email){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName:'', secondName:'', age:'',email:''})
        }         
    }

    return(
        <article className="container">
        <form className="form">
        
            <div className="form-control mt-3 mb-3">
                <label htmlFor="firstName">Name : </label>
                <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleOnchange}></input>
            </div>

            <div className="form-control mb-3">
                <label htmlFor="secondName">Name 2 : </label>
                <input type="text" id="secondName" name="secondName" value={person.secondName} onChange={handleOnchange}></input>
            </div>

            <div className="form-control mb-3">
                <label htmlFor="age">Age : </label>
                <input type="number" id="age" name="age" value={person.age} onChange={handleOnchange}></input>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" value={person.email} onChange={handleOnchange}></input>
            </div>

            <button onClick={handleSubmit} className="btn btn-outline-success btn-sm mt-2" type="submit">Add Person</button>

        </form>

        {people.map((person) => {
            const {id, firstName, secondName, age, email} =person;
            return (
                <div className="mt-3">
                <p>{email}</p>
                <h3>{firstName}</h3>
                    <h4>{secondName}</h4>
                    <h2>{age}</h2>
                    <p className="text-muted"><small>{id}</small></p>
                </div>
            )
        })}


        </article>
    )
};

export default MultipleInputs;