import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

const App = () => {
  const [tasks, setTask] = useState([{
    id: 1,
    text: "Doctor",
    day: "Feb 5th at 2:30pm",
    reminder: true
  }])

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task'}
    </div>
  );
}


export default App;
