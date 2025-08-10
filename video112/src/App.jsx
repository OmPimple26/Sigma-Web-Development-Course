import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Om")

  // Case-1
  // const [form, setForm] = useState({email: "", phone: ""})

  // Case-2
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleMouseOver = () => {
    alert("Hey I am a mouse over event")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form , [e.target.name]: [e.target.value]})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick= {handleClick} >Click me</button>
      </div>

      <div className="pink" onClick={handleMouseOver}>
        I am a pink div
      </div>

      {/* <input type="text" value={name} onChange={handleChange}/> */}

      {/* Case-1 */}
      {/* <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/> */}

      {/* Case-2 */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App