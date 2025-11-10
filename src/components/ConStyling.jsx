import React, {useState} from 'react'

export function ConStyling () {
    const [isActive, setIsActive] = useState(false)

    // const btnStyle = {
    //     borderRadius: 10,
    //     margin: 50,
    //     padding: 20,
    //     backgroundColor: "lightblue",
    //     color: isActive ? "black" : "red"
    // }

    const baseStyle = {
        borderRadius: 10,
        margin: 50,
        padding: 20,
        backgroundColor: "lightblue",
    }

    const activeStyle = {
        color: "green"
    }

    const inActiveStyle = {
        color: "red"
    }

    return(
        <div>
            <h1>Conditional styling in React</h1>
            {/* <button style={btnStyle}>Submit</button> */}
            <button style={{...baseStyle, ...(isActive ? activeStyle : inActiveStyle)}}>Submit</button>
        </div>
    )
}