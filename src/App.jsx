import React, { useState } from 'react'
import './assets/components/Header.css'
import Header from './assets/components/Header'
import HeaderApi from './assets/components/HeaderApi'
import Apiaright from './assets/components/Apiaright'


const App = () => {
  const [show,setShow] = useState(false)
  const [count,setCount] = useState(true)
  return (
    <div>
      <Header />
     <div className='default
     '>
     <HeaderApi setShow={setShow} show={show}  count={ count} setCount={setCount}   />
     <Apiaright toogle={show}  count={count} /> 
     </div>
    </div>
  )
}

export default App