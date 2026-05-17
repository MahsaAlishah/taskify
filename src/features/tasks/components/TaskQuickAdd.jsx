import { useContext, useState } from "react";
import toast from "react-hot-toast";
import TasksContext from "../context/TasksContext";

function TaskQuickAdd() {
  const {dispatch}=useContext(TasksContext)
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()){
      toast.error("Task title cannot be empty");
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: text,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="card px-6 py-4 max-w-xl">
      <label
        htmlFor="taskTitle"
        className="mb-2 block text-sm font-medium text-text-tertiary"
      >
        Task Title
      </label>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="textField__input"
          placeholder="Add a new task..."
        />
        <button type="submit" className="btn btn--primary w-1/4 self-end">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskQuickAdd;
