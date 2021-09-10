const tasks = []

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => (
              <h3>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
