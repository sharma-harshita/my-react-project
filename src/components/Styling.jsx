import React from 'react';

function Styling () {

    const styleHeading = {
        color: 'red', 
        backgroundColor:"black",
        margin: 10,
        lineHeight: 2
    }
    return (
        <div>
            <h1 style={styleHeading}>Hello World</h1>
            <h1>Styling React Components</h1>
        </div>
    )
}

export default Styling