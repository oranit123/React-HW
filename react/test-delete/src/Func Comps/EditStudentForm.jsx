import React from "react";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default class EditStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedName: this.props.student.name,
      editedGrade: this.props.student.grade,
    };
  }

  handleNameChange = (e) => {
    this.setState({ editedName: e.target.value });
  };

  handleGradeChange = (e) => {
    this.setState({ editedGrade: e.target.value });
  };

  handleFormSubmit = (e) => {
   e.preventDefault();
   
    let newEditedName=this.state.editedName
   let newEditedGrade=this.state.editedGrade
    let editedStudent = { ...this.props.student, name: newEditedName, grade: newEditedGrade };
    this.props.handleSave(editedStudent);
  console.log(this.props.student)
  };

  render() {
  

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" value={this.state.editedName} onChange={this.handleNameChange} />
        <input type="text" value={this.state.editedGrade} onChange={this.handleGradeChange} />
        <IconButton type="submit" aria-label="save" color="primary">
          <SaveIcon />
        </IconButton>

      </form>
    );
  }
}