import React from 'react'
import { Cancel } from './Cancel'
import { Submit } from './Submit'
import { CSSModule } from './CSSModule'
import { StyledComponents } from './StyledComponents'

export function Login () {
    return(
        <div>
            <h1> External Styling in React</h1>
            {/* <Submit/>
            <Cancel/>
            <CSSModule/> */}
            <StyledComponents/>
        </div>
    )
}