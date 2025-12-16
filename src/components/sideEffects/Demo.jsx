import React, {useState, useEffect} from 'react';

export default function Demo () {

    const [a, setA] = useState(0)

    useEffect(()=>{
        console.log("value of a", a);

        return () => {
            console.log("component unmounted - cleanup");
        }
    }, [a])
    // useEffect(()=>{
    //     console.log("Component Mounted");

    //     const timer = setInterval(() => {
    //         console.log("Cleanup function");
    //     }, 1000);

    //     //cleanup function
    //     return () =>{
    //         console.log("Demo component unmounted - cleanup function");
    //         clearInterval(timer)
    //     }
    // })
    return(
        <div>
            <h1>Demo: {a}</h1>
            <button onClick={()=> setA(a+1)}>Increase</button>
        </div>
    )
}