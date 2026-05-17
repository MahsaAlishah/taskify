import toast from "react-hot-toast";

export function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      );
    default:
      return state;
  }
}

export default function initializeTasks() {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    toast.error("Error reading from localStorage:");
    console.error(error);
    return [];
  }
}
