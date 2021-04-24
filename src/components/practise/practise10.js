import React, {useState, useContext} from 'react';
import {data} from '../data'
import { Link } from 'react-router-dom';


const PersonContext = React.createContext();



const ContextApi = () => {

    const [people,setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return(
        <PersonContext.Provider value={{removePerson, people}}>
        <h1>Context Api / UseContext</h1>

        <List />
        </PersonContext.Provider>
    )
}

    const List = () => {
        const mainData = useContext(PersonContext)
        return(
            <div>
                {mainData.people.map((person) => {
                    return(
                        <SinglePerson key={person.id} {...person} />
                    );
                })}
            </div>
        );
    };

    const SinglePerson = ({id,name}) => {
        const {removePerson} = useContext(PersonContext);
        console.log(data);
        return(

            // <div>

            // <Link to={ `/person/${id}`}>View</Link>

            // </div>
            
            <div className="item">
                <h4>{name}</h4>
                <button onClick={() => removePerson(id)}>remove</button>
            </div>
        )
    };

export default ContextApi;