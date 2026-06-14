import toast from "react-hot-toast";

export const initialState = {
  tasks: [],
  filter: "all",
};

export function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task,
        ),
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task,
        ),
      };

    default:
      return state;
  }
}

export default function initializeTasks() {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? { tasks: JSON.parse(storedTasks), filter: "all" }
      : initialState;
  } catch (error) {
    toast.error("Error reading from localStorage:");
    console.error(error);
    return initialState;
  }
}
