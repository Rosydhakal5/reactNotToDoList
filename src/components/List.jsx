import { ArrowRightAltOutlined, DeleteOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const TodoList = ({ id, taskName, onDelete, hours }) => {
  const handleDelete = () =>{
    alert("delete is clicked  " + taskName);
    onDelete(taskName);
  }
  return (
    <Stack direction={"row"} spacing={3} sx={{ backgroundColor: '#f1eaf2' }} padding={2}>
      <span>{id}</span>
      <span>{taskName}</span>
      <span>{hours}</span>
      <div>
        <IconButton color="error" onClick={handleDelete}>
          <DeleteOutlined /> 
        </IconButton>
        <IconButton color="success">
          <ArrowRightAltOutlined />
        </IconButton>
      </div>
    </Stack>
  )
}

export default TodoList;
