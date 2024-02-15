import React from "react";
import FCStudentData from "./FCStudentData";
import List from "@mui/material/List";

export default function FCStudentsList(props) {
  return (
    <List dense sx={{ width: "100%", maxWidth: 360, backgroundColor: "black" }}>
      {props.students.map((student) => (
        <FCStudentData
          key={student.id}
          student={student}
          deleteStudent={props.deleteStudent}
          saveEditedStudent={props.saveEditedStudent}
        />
      ))}
    </List>
  );
}