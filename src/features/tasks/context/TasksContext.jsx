import { createContext, useEffect, useMemo, useReducer } from "react";
import initializeTasks, { initialState, tasksReducer } from "../reducer/tasksReducer";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, initialState, initializeTasks);

  const { tasks, filter } = state;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "completed") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const active = tasks.filter((t) => !t.done).length;
    const completed = total - active;

    return { total, active, completed };
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ tasks, filteredTasks, filter, stats, dispatch }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
