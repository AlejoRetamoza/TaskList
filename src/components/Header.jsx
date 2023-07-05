import React from "react";
import "../styles/Header.css";
import { useState, useContext } from "react";
import { TaskContext } from "./taskContext";

export default function Header() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <h1>To Do</h1>
      <input
        type="text"
        placeholder="Task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        name=""
        id="text-area"
        cols="30"
        rows="10"
        placeholder="Details"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="button-primary">Create Task</button>
    </form>
  );
}
