import { useContext } from "react";
import TasksContext from "../context/TasksContext";

function TaskSummary() {
  const { stats } = useContext(TasksContext);

  return (
    <div className="flex items-center gap-2 text-xs text-text-tertiary ">
      <span>Total {stats.total}</span>
      <span>•</span>
      <span>Active {stats.active}</span>
      <span>•</span>
      <span>Completed {stats.completed}</span>
    </div>
  );
}

export default TaskSummary;
