import { Component } from "react";

export default class CCInputs extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            num1:0,
            num2:0
        }
        
    }
    btn2pernt=()=>{
       this.props.sent2Nums(Number(this.state.num1),Number(this.state.num2))
    }
    render(){
        return(
            <div>
            <input type="text" onChange={(e)=>this.setState({num1:e.target.value})} />
            <br/>
            <input type="text" onChange={(e)=>this.setState({num2:e.target.value})} />
              <br/>
              <button onClick={this.btn2pernt}>הצג רשימה</button>
            </div>
        )
    }

}