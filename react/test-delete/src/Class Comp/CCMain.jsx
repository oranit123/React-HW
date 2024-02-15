import React from "react";
import FCInputs from "../Func Comps/FCInputs";
import FCStudentsList from "../Func Comps/FCStudentsList";

export default class CCMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      counter: 0,
    };
  }

  getStudent = (stu) => {
    this.setState((prevState) => ({
      students: [...prevState.students, { ...stu, id: prevState.counter + 1 }],
      counter: prevState.counter + 1,
    }));
  };

  deleteStudent = (idToDelete) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((stu) => stu.id !== idToDelete),
    }));
  };

  saveEditedStudent = (editedStudent) => {
    this.setState((prevState) => ({
      students: prevState.students.map((student) =>
        student.id === editedStudent.id ? editedStudent : student
      ),
    }));
  };

  render() {
    return (
      <div>
        <FCInputs sendStudent={this.getStudent} />
        <FCStudentsList
          students={this.state.students}
          deleteStudent={this.deleteStudent}
          saveEditedStudent={this.saveEditedStudent}
        />
      </div>
    );
  }
}