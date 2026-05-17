import { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "../context/TasksContext";

function TasksList() {
  const { tasks } = useContext(TasksContext);

  if (!tasks.length) {
    return (
      <p className="text-text-muted text-center py-2">
        No tasks yet. Add one above 👆
      </p>
    );
  }

  return (
    <>
      <h4 className="pl-2 font-extrabold text-text-tertiary mb-2">Task List</h4>
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
    </>
  );
}

export default TasksList;
