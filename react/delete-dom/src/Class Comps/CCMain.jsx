import React, { Component } from "react";

import FCInputs from "../Func Comps/FCInputs";
import FCStudentsList from "../Func Comps/FCStudentsList";


const studentArr=[];

export default class CCMain extends Component {
  constructor(props) {
    super(props)
        this.state=
        {
            students:studentArr,
            counter:studentArr.length
        };
  }
  getStudent=(stu)=>{
  let newStudent=[...this.state.students,stu]
  let newCounter=this.state.counter+1
  stu.id=newCounter;
  this.setState({
  counter:newCounter,
  students:newStudent

  });

  }
  getStu2Del=(id2Del)=>{
    console.log(id2Del)
     let newStudent=this.state.students.filter(stu => stu.id !== id2Del);
    this.setState({students:newStudent})

  }
  getStu2Edit=(id2Edit)=>{
    
    console.log(id2Edit)
  }

  render() {
    
    return <div>

    <FCInputs sendStudent={this.getStudent}/>
    <FCStudentsList students={this.state.students} sentStu2Del={this.getStu2Del} sentStu2Edit={this.getStu2Edit} />
    </div>;
  }
}
