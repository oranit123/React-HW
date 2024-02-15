import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditStudentForm from "./EditStudentForm";

export default class FCStudentData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedName: props.student.name,
      editedGrade: props.student.grade,
    };
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = (editedStudent) => {
    this.props.saveEditedStudent(editedStudent);
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <ListItem key={this.props.student.id} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={ `${this.props.student.id}`} src={"avatar1.jpg"} />
          </ListItemAvatar>
          {this.state.isEditing ? (
            <EditStudentForm student={this.props.student} handleSave={this.handleSave} />
          ) : (
            <>
              <ListItemText primary={`${this.props.student.id} -- ${this.props.student.name} -- ${this.props.student.grade}`} />
              <IconButton aria-label="edit" color="info" onClick={this.handleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => this.props.deleteStudent(this.props.student.id)}
              >
                <DeleteIcon/>
              </IconButton>
            </>
          )}
        </ListItemButton>
      </ListItem>
    );
  }
}