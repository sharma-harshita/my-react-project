import React, { useEffect, useState } from 'react'

export default function Scenario1 (){

    const [count, setCount] = useState(1)

    useEffect(()=>{
        console.log("useeffect executed");
        // setCount(count+1)
    })
    return(
        <div>
            <h1>useEffect without dependency array</h1>
            <h2>Count Value: {count}</h2>
        </div>
    )
}