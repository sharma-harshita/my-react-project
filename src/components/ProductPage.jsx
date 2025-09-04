import React, {useState} from 'react';

export function ProductPage (){
    const [name, setName] = useState("John")

    function updateState(){
        setName("Doe")
    }
    return( 
        <div>
            <h1> useState example </h1>
            <span> State Variable value : {name}</span>
            <button onClick={updateState}>Click to update state variable value</button>
        </div>
    )
}