import { Children, createContext, useEffect, useReducer } from "react";
import initializeTasks, { tasksReducer } from "../reducer/tasksReducer";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [], initializeTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
