import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Person_add_alt from '@mui/icons-material/PersonAddAlt';
export default function FCInputs(props) {
  let name;
  let grade;

  const btnAddStudent = () => {
    let student = { name, grade };
    props.sendStudent(student);
  };

  return (
    <div>
      <TextField
        color="secondary"
        id="outlined-basic"
        label="Name"
        margin="normal"
        variant="outlined"
        onChange={(e) => {
          name = e.target.value;
        }}
        
      />
      <br />

      <TextField
        color="primary"
        type="number"
        id="outlined-basic"
        label="Grade"
        margin="normal"
        variant="outlined"
        onChange={(e) => {
          grade = e.target.value;
        }}
      
      />
      <br />
      <br />
    
      <Button style={{marginBottom:20}} onClick={btnAddStudent} variant="outlined" color='secondary'startIcon={<
        Person_add_alt/>}>
        Add Student
      </Button>
    </div>
  );
}
