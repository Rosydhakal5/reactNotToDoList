import { Stack } from "@mui/material";
import TodoList from "./List";

const EntryList = (props) => {
  const { entryLists, onTaskDelete, onTransfer } = props;
  const callBackFnFromEntryList = (tasktoDelete) => {
    alert("Tbis is function  " + tasktoDelete)
    onTaskDelete(tasktoDelete);
  }

  return (
    <div>
      <h3>Entry List</h3>
      <Stack className="list" spacing={1}>
        {entryLists.map((list, index) => (
          <TodoList
           key={list.taskName+index} 
           id={index+1} 
           taskName={list.taskName} 
           hours={list.hours} 
           onDelete={callBackFnFromEntryList}
           />
        ))}
      </Stack>
    </div>
  )
}

export default EntryList;
