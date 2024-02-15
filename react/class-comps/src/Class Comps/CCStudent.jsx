import { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    this.state={
        num:0
       
    }
  }
  btnAdd=()=>{
this.setState((prevS)=>({
    num:prevS.num+1
}))
  }
   chgTxt =(e) => 
  {
  console.log(e.taeget.value)
  }
  render() {
    return (
      <div
        style={{
          borderRadius: 15,
          border: "solid yellow 2px",
          margin: 20,
          padding: 15,
          fontSize: 35,
        }}
      >
        <h2>Class Comps</h2>
        id={this.props.id}
        <br />
        name={this.props.name}
        <br />
        grade={this.props.grade}
        <br />
        num={this.state.num}<br/>
        <input type="text"   placeholder="enter a num" onClick={this.chgTxt}/><br/>
        <button
        onClick={this.btnAdd}
        style={{
          background: "yellow",
          color: "black",
        }}
      >
        Add
      </button><br/>

      </div>
    );
    }
}
