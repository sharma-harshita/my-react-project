import React, {useState} from "react";

export function VarState (){
    const [a, setA] = useState(0);
    let b = 10

    function handleStateInc (){
        setA(a+1)
    }

    function handleVarDec(){
        b = b-1
        console.log("value of b", b);
    }
    return(
        <div>
            <h1>State Variable v/s Variable</h1>
            <h2>State Variable {a}</h2>
            <button onClick={handleStateInc}>Increment State Variable</button>

            <h2>Variable {b}</h2>
            <button onClick={handleVarDec}>Decrement Variable</button>
        </div>
    )
}

// const VarState = () => {

// }