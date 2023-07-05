import React from "react";
import "../styles/taskList.css";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "./taskContext";

export default function TaskList() {
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <div className="task-list-single">
        <h1>There are no pending tasks</h1>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}
