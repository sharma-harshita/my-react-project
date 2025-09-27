import React, {useState} from 'react';

export function StateAsPrevState () {

    const [a, setA] = useState(10);

    const handleStateInc = () => {
        setA(a+1)
        setA(a+1)
    }

    const handleStateIncrement = () =>{
        setA(a=> a+1)
        setA(a=> a+1)
    }

    setA(10+1)
    return(
        <div>
            <h1> Update state using previous state variable value</h1>
            <h3>State Variable value : {a}</h3>

            <button onClick={handleStateInc}>Increase state value</button>

            <button onClick={handleStateIncrement}>Increase state value using updater function</button>
        </div>
    )
}