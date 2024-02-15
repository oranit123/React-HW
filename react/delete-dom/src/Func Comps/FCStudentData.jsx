import PersonRemove from "@mui/icons-material/PersonRemove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import  save   from "@mui/icons-material/Save";
import  close   from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";
import Save from "@mui/icons-material/Save";

export default function FCStudentData(props) {

 
  return (
    <div>
      <ListItem
        key={props.student.id}
        secondaryAction={
          <div>

            <IconButton
              aria-label="edit"
              color="info"
              
              onClick={
               
            props.sentStu2Edit(props.student.id)
              }
            >
           
              <EditIcon />
            </IconButton>

            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                props.sentStu2Del(props.student.id);
              }}
            >
              <PersonRemove />
            </IconButton>
          </div>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°`} src={"avatar1.jpg"} />
          </ListItemAvatar>
          <ListItemText
            primary={`${props.student.id} -- ${props.student.name} -- ${props.student.grade} `}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
