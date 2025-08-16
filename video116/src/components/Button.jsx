// Without Context API -
// import React from 'react'
// import Component1 from './Component1';

// const Button = ({count}) => {
//   return (
//     <div>
//         <button><span><Component1 count={count}/>I am a button</span></button>
//     </div>
//   )
// }

// export default Button

// -----------------------------------------------------------------------------------------------------------------------------------------------

// With Context API -
import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>I am a button</button>
    </div>
  )
}

export default Button