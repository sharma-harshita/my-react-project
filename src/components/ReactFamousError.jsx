import React, {useState} from 'react';

export function ReactFamousError (){

    const [a, setA] = useState(10);

    // setA(a+1)   // scenario 1: do not directly call set state function

    const updateStateValue = () => {
        setA(a+1)
    }
    return( 
        <div>
            <h1> React famous error - Too many re-renders </h1>

            <h1>{a}</h1>
            {/* <button onClick={updateStateValue()}>Update State Value</button> */} 
            {/* scenario 2 =  do not execute your click handler when render your page */}
            <button onClick={updateStateValue}>Update State Value</button>

            
            {/* scenario 3 - set state should not be directly invoked inside event handler */}
            {/* <button onClick={setA(a+1)}>Update State Value</button> */}
            <button onClick={()=>setA(a+1)}>Update State Value</button>

        </div>
    )
}