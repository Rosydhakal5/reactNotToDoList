import { Box } from "@mui/material";
import TodoList from "./List";

const BadList = ({ badLists }) => {
  return (
    <div>
      <h3>Bad List</h3>
      <Box className="list">
        {badLists.map((list, index) => (
          <TodoList key={list.taskName+index} id={index+1} taskName={list.taskName} hours={list.hours} />
        ))}
      </Box>
    </div>
  )
}

export default BadList;
