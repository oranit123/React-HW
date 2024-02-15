import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCInputs from './Classs Comps/CCInputs'
import FCResult from './Func Comps/FCResult'
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
     values:[]
    }
    
  }
  get2Nums=(num1,num2)=>{
    this.setState({
      values:[
        num1 + num2,
        num1 - num2,
        num1 * num2,
        num1 / num2
      ]
    })

  }
render(){
  return (
    <>
    <CCInputs sent2Nums={this.get2Nums} />
    <FCResult values={this.state.values} />
    </>
  )
}

}

export default App
