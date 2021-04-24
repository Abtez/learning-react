import React, {useEffect, useState} from 'react';
import './git.css'

const url = 'https://api.github.com/users'

const UseEffectGit = () => {
    const [users, setUsers] = useState([]);
    
    const getUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
    }

    useEffect( () => {
        getUsers()
    },[])


    return(
        <div className="container">
            <h1>github users</h1>

            <div className="row">                

            {users.map( (user) => {
                const {login,avatar_url,html_url} = user

                return <div key={user.id} className="col-md-4">
                <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 img">
                    <img src={avatar_url} alt={login} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{login}</h5>
                      <p className="card-text"></p>
                      <p className="card-text"><small className="text-muted"><a href={html_url}>Github Account</a></small></p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            })}
        </div>
        </div>
    )
}

export default UseEffectGit;