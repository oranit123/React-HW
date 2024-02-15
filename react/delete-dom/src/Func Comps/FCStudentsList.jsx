import FCStudentData from "./FCStudentData"
import List from '@mui/material/List';

export default function FCStudentsList(props){
    
    let studentsStr=props.students.map(
     stu=>
     <FCStudentData key={stu.id} student={stu} sentStu2Del={props.sentStu2Del} sentStu2Edit={props.sentStu2Edit}/>
    )
    return(
        <List dense sx={{ width: '100%', maxWidth: 360, backgroundColor:"black" }}>
        {studentsStr}
      </List>
    )
}