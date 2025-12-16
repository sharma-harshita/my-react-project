import React, { useEffect } from 'react'

export default function Initial (){

    useEffect(()=>{
        console.log("inside useffect hook");
    })

    return(
        <div>
            <h1>Introduction of useEffect</h1>
        </div>
    )
}