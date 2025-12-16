import React, {useState, useEffect} from 'react';
import Demo from './Demo';

export default function Scenario4 () {

    const [isDemo, setIsDemo] = useState(true)

    return(
        <div>
            <h1>useEffect with cleanup function</h1>
            <button onClick={()=> setIsDemo(false)}>Click to unmount Demo Component</button>
            {isDemo ? <Demo/> : <h1>Demo Component Removed</h1>}
        </div>
    )
}