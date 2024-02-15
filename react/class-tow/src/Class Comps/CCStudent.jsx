import { Component } from "react";

export class CCStudent extends Component {
  constructor(props) {
    super(props);
    this.state={
        grade:this.props.grade
    }
  }
  btnLearn=()=>{
    this.setState((prevs)=>({
        grade:prevs.grade+2
    }))
  }
  chgText=(x)=>{
    console.log(e.target.value)
  }
  render() {
    return (
      <div style={{
        borderRadius: 15,
        border: 'solid purple 2px', margin: 20,
        padding: 15
      }}>
        id={this.props.id}
        <br />
        name={this.props.name}<br/>
        grade={this.state.grade}<br/>
        <br />
        <input onChange={this.chgText} type="text" placeholder="Please enter a number" /> <br />
        <button onClick={this.btnLearn}>Add</button>
      </div>
    );
  }
}
