import React, { useState } from "react";
import "./todo.css";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [count, setCount] = useState(0);
  const [countComp, setCountComp] = useState(0);
  const [newTaskColor, setNewTaskColor] = useState("#000000");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false, color: newTaskColor }]);
      setNewTask("");
      setCount(count + 1);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    countChecked();
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setCount(count - 1);
    countChecked();
  };

  function countChecked() {
    const checkedCount = tasks.filter((task) => task.completed).length;
    setCountComp(checkedCount);
  }

  return (
    <div className="Main">
      <div className="content">
        <div className="heading">
          <h1>{count} Task List</h1>
          <h2>{countComp} Remaining</h2>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <div className="cont">
            <li
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.color,
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              {task.text}
            </li>
            <button className="del-btn"onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task here"
        />
        <input
          type="color"
          value={newTaskColor}
          onChange={(e) => setNewTaskColor(e.target.value)}
        />
      </div>
      <button className="btn" onClick={addTask}>+ Add Task</button>
    </div>
  );
}

export default Main;
