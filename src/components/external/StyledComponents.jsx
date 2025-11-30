import React from 'react';
import styled from 'styled-components';

const PriButton = styled.button`
    background: blue;
    color: white;
    padding: 20px
`

const SecButton = styled.button`
    background: red;
    color: white;
    padding: 20px
`

export function StyledComponents () {
    return(
        <div>
            <h1>Styled Components</h1>
            <PriButton>Submit</PriButton>
            <SecButton>Submit</SecButton>
        </div>
    )
}