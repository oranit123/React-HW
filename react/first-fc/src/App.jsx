import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FCStudnt from './Function Comps/FCStudnt'

function App() {
  

  return (
    <>
      <h1>First Function Comps</h1>
      <FCStudnt id="12" name="or" grade={90}/>
      <FCStudnt id="11" name="mohse" grade={65}/>
    </>
  )
}

export default App
