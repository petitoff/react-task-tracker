import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

const App = () => {
  const [tasks, setTask] = useState([{ id: 1, text: "Doctor", day: "Feb 5th at 2:30pm" }])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}


export default App;
