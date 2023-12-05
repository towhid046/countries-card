import { useState } from 'react';
import './Counter.css'
const Counter = () => {
   const [count, setCount] = useState(0)
   const subhanAllah = () => {
    setCount((prevValue)=> prevValue < 33? prevValue + 1 : prevValue )
   }
   const alhamdulliah = () => {
    setCount((prevValue)=> prevValue > 32 && prevValue < 66 ? prevValue + 1 : prevValue )
   }
   const allahhuAkbar = () => {
    setCount((prevValue)=> prevValue > 65 && prevValue < 100 ? prevValue + 1 : prevValue )
   }
   const reset = () => {
    setCount(0)
   }

    return(
        <>
        <h1 className ='counter_heading'>Task 2: Building a dynamic tashbih application</h1>
        <div className="container">

        <h1 className='counter_display'>{count}</h1>
            <button className='counter_btn' onClick={subhanAllah}>SUBHANALLAH</button>
            <button className='counter_btn' onClick={alhamdulliah}>ALHAMDULLIAH</button>
            <button className='counter_btn' onClick={allahhuAkbar} >ALLAHHUAKBAR</button>
            <button className='counter_btn' onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default Counter;