import React, { useContext, useState } from 'react'
import Nvabar from './Nvabar'
import { countercontext } from './Contexthook/context'

export default function App() {
  const [count, setcount] = useState(0)


  return (
    <>
      <countercontext.Provider value={count}>
        <Nvabar />
        <div className='m-5 p-5'>
          <button className='m-3' onClick={() => setcount(count - 1)}>-</button>
          value: {count}
          <button className='m-3' onClick={() => setcount(count + 1)}>+</button>
        </div>
      </countercontext.Provider>
    </>
  )
}
