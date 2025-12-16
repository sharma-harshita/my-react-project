import React, {useState, useEffect} from 'react';

export default function Scenario3 () {

    const [a, setA] = useState(0)
    const [b, setB] = useState(10)

    useEffect(()=>{
        console.log("Current Value of ", a, b);
    }, [a, b])

    // useEffect(()=>{
    //     console.log("VALUE B", b);
    // }, [b])

    return(
        <div>
            <h1>useEffect with dependencies</h1>
            <h2> Value of A : {a}</h2>
            <button onClick={()=> setA(a+1)}>Increase</button>
            <h2> Value of B : {b}</h2>
            <button onClick={()=> setB(b-1)}>Decrease</button>
        </div>
    )
}