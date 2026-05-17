import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TasksContext);
  return (
    <li className="mb-3">
      <div className="card p-4 flex items-center gap-2">
        <input
          id={`task-${task.id}`}
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        />

        <label
          htmlFor={`task-${task.id}`}
          className={`${task.done ? "line-through text-text-muted" : "text-text-primary"}`}
        >
          {task.text}
        </label>
      </div>
    </li>
  );
}

export default TaskItem;
