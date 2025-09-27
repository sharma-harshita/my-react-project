import React, {useState} from 'react'

export function StateAsObjUserInput (){

    const  [user, setUser] = React.useState({name:"John", age: 30, email:''})

    const handleEmailChange = (e) => {
        setUser({ ...user, email : e.target.value})
    }

    return(
        <div>
            <h1>State as Object with User Input</h1>
            <h3> Name: {user.name}</h3>
            <h3> Age: {user.age}</h3>
            <h3> Email: {user.email}</h3>

            <input type='email' name='email' value={user.email} placeholder='Enter email' onChange={handleEmailChange}/>
        </div>
    )
}