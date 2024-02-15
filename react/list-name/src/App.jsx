import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FCPersonList from './Func Comps/FCPersonList'
import FCInpuuts from './Func Comps/FCInputs'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       persons:[]
    };
  }
  getPerson=(person)=>
  {
    console.log(person);
    let newPersons=[...this.state.persons,person]
    console.log(newPersons)
    this.setState({persons:newPersons})
  }
  render(){
    return(
      <>
      
      <h1>Vite + React</h1>
        <div className="card">
      
        <FCInpuuts sentPerson={this.getPerson}/>
        <FCPersonList persons={this.state.persons}/>
      
        </div>
      
      </>
    )
  }
  
}

export default App
