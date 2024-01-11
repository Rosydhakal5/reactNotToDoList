import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const AddNewTask = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState();

  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const handleChangeHours = (event) => {
    setHours(event.target.value);
  }

  const handleAddTask = () => {
    // alert("This is the task " + taskName + " " + hours + " Added new task!");
    onSubmit(taskName, hours);
  }

  return (
    <Stack spacing={2}>
      <TextField placeholder="Enter a task..." onChange={handleChangeTaskName} />
      <TextField placeholder="Enter no. of hrs" type="number" onChange={handleChangeHours} />
      <Button variant="contained" onClick={handleAddTask}>Add New Task</Button>
    </Stack>
  )
}

export default AddNewTask;
