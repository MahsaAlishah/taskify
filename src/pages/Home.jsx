import { useEffect, useReducer } from "react";
import TaskQuickAdd from "../features/tasks/components/TaskQuickAdd";
import TasksList from "../features/tasks/components/TasksList";
import initializeTasks, {
  tasksReducer,
} from "../features/tasks/reducer/tasksReducer";

function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, [], initializeTasks);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [tasks]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl space-y-4">
        <TaskQuickAdd
          onAddTask={(taskText) =>
            dispatch({ type: "ADD_TASK", payload: taskText })
          }
        />
        <hr className="w-full border-t border-gray-400 my-7" />
        <TasksList
          tasks={tasks}
          onToggleTask={(taskId) =>
            dispatch({ type: "TOGGLE_TASK", payload: taskId })
          }
        />
      </div>
    </div>
  );
}

export default Home;
