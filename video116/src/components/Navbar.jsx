// Without Context API -
// import React from "react";
// import Button from "./Button";

// const Navbar = ({count}) => {
//   return (
//     <>
//       <div>Navbar</div>
//       <Button count={count}/>
//     </>
//   );
// };

// export default Navbar;

// -----------------------------------------------------------------------------------------------------------------------------------------------

// With Context API -
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <div>
      Navbar
    </div>
    <Button/>
    </>
  )
}

export default Navbar