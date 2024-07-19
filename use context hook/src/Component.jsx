import React, { useContext } from 'react'
import { countercontext } from './Contexthook/context'

export default function Component() {
    const counter = useContext(countercontext)
    return (
        <div>
            this value is showing using use context hook:{counter}
        </div>
    )
}
