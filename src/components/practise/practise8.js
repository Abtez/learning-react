import React, {useState} from 'react';
import './practise.css'

const MultipleInputs = () => {

    const [person,setPerson] = useState({firstName1:'',secondName:'',age:'',email1:''})
    const [people, setPeople] = useState([])

    const handleOnchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName1 && person.secondName && person.age && person.email1){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName1:'', secondName:'', age:'',email1:''})
        }         
    }

    return(
        <article className="container">
        <form className="form">
        
            <div className="form-control mt-3 mb-3">
                <label htmlFor="firstName1">Name : </label>
                <input type="text" id="firstName1" name="firstName1" value={person.firstName1} onChange={handleOnchange}></input>
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
                <label htmlFor="email1">Email1 : </label>
                <input type="email1" id="email1" name="email1" value={person.email1} onChange={handleOnchange}></input>
            </div>

            <button onClick={handleSubmit} className="btn btn-outline-success btn-sm mt-2" type="submit">Add Person</button>

        </form>

        {people.map((person) => {
            const {id, firstName1, secondName, age, email1} =person;
            return (
                <div className="mt-3">
                <p>{email1}</p>
                <h3>{firstName1}</h3>
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