import React, {useState, useEffect, useLayoutEffect} from 'react';

export default function Layout (){
    const [height, setHeight] = useState()

    // useEffect(()=>{
    //     const box = document.getElementById("box");
    //     setHeight(box.offsetHeight)
    // }, [])

    useLayoutEffect(()=>{
        const box = document.getElementById("box");
        setHeight(box.offsetHeight)
    }, [])
    
    return(
        <div>
            <div id="box" style={{"height": "100px", "width":"100px", background:"red"}}></div>
            <h1>useEffect v/s useLayoutEffect Hook</h1>
            <h2> Height: {height}</h2>
        </div>
    )
}