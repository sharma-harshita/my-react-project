import React, {useState} from "react";

export function UserInput (){
    const [name, setName] = useState("John")
    const [email, setEmail] = useState("")

    function handleUpdate (){
        setName("Doe")
    }

    function handleChange (e){
        console.log(e.target.name);
        setEmail(e.target.value)
    }
    return(
        <div>
            <h1>State as String and update state variable from user input</h1>
            <h2> Enter user email</h2>

            <input type="text" name = "email" value={email} placeholder="Enter your email" onChange={handleChange}/>

            <h2> State variable name value : {name}</h2>
            <h2> State variable email value : {email}</h2>
            <button onClick={handleUpdate}>Update State value</button>
        </div>
    )
}