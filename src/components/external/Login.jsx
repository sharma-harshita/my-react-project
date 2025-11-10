import React from 'react'
import { Cancel } from './Cancel'
import { Submit } from './Submit'
import { CSSModule } from './CSSModule'

export function Login () {
    return(
        <div>
            <h1> External Styling in React</h1>
            <Submit/>
            <Cancel/>
            <CSSModule/>
        </div>
    )
}