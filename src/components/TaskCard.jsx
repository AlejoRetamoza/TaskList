import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/taskCard.css";
import { TaskContext } from "./taskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const [animation, setAnimation] = useSpring(() => ({
    opacity: 1,
    transform: "scale(1)",
    config: { tension: 200, friction: 20 },
  }));

  const handleDelete = (taskId) => {
    setAnimation({
      opacity: 0,
      transform: "scale(0.8)",
      config: { tension: 200, friction: 20 },
      onRest: () => {
        deleteTask(taskId);
      },
    });
  };

  return (
    <animated.div className="cards" style={animation}>
      <h4>{task.name}</h4>
      <p>{task.details}</p>
      <button className="button-primary" onClick={() => handleDelete(task.id)}>
        Delete
      </button>
    </animated.div>
  );
}