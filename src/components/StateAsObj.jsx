import React, {useState} from 'react'

export function StateAsObj (){

    const [user, setUser] = useState({name:"John", age: 30})

    const handleNameChange = () => {
        setUser({...user, name: "Bob"})
    }

    const handleAgeChange = () => {
        setUser({...user, age:50})
    }
    return(
        <div>
            <h1>State value as Object</h1>
            <h2> Name: {user.name}</h2>
            <h2> Age: {user.age}</h2>

            <button onClick={handleNameChange}> Modify Name</button>
            <button onClick={handleAgeChange}> Modify Age</button>
        </div>
    )
}