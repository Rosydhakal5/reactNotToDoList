import { useState } from 'react'
import './App.css'
import AddNewTask from './components/AddNewTask'
import BadList from './components/BadList'
import EntryList from './components/EntryList'

// const defaultEntryLists = [
//   { taskName: "Reading", hours: 4 },
//   { taskName: "Walking", hours: 5 },
// ]

// clear form on submit
// delete task list
// transfer to bad list
// total hours count

const badLists = []
  // { taskName: "Dancing", hours: 2 }

function App() {
  const [entryLists, setEntyLists] = useState([]);

  const updateEntryLists  = (newTaskName, newTaskHours) => {
    const newTask = { taskName: newTaskName, hours: newTaskHours };

    setEntyLists([...entryLists, newTask])
  }

  const removeEntryList = (taskNameToRemove) => {
    const lol = entryLists.findIndex(
      (list)  => list.taskName === taskNameToRemove
    );
    const filteredList = entryLists.filter((list, index) => index !== lol);
    setEntyLists(filteredList)
  }


  return (
    <>
      <h2>To Do List</h2>
      <AddNewTask onSubmit={updateEntryLists} />
      <EntryList entryLists={entryLists} onTaskDelete = {removeEntryList} />
      <BadList badLists={badLists} />
    </>
  )
}

export default App
