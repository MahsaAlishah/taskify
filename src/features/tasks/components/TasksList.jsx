import { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "../context/TasksContext";
import TaskSummary from "./TaskSummary";
import TaskFilters from "./TaskFilters";

function TasksList() {
  const { tasks, filteredTasks } = useContext(TasksContext);

  return (
    <>
      <div className="flex items-center justify-between ">
        <h4 className="pl-2 font-extrabold text-text-tertiary">Task List</h4>
        <TaskSummary />
      </div>

      {tasks.length > 0 && <TaskFilters />}

      {!tasks.length ? (
        <p className="text-text-muted text-center py-2">
          No tasks yet. Add one above 👆
        </p>
      ) : !filteredTasks.length ? (
        <p className="text-text-muted text-center py-4">
          No matching tasks found.
        </p>
      ) : (
        <ul>
          {filteredTasks.map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TasksList;
