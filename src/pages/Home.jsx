import { useEffect, useState } from "react";
import TaskQuickAdd from "../features/tasks/components/TaskQuickAdd";
import TasksList from "../features/tasks/components/TasksList";
import toast from "react-hot-toast";

function Home() {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      toast.error("Error reading from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [tasks]);

  const addNewTask = (taskText) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: taskText, done: false },
    ]);
  };

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl space-y-4">
        <TaskQuickAdd onAddTask={addNewTask} />
        <hr className="w-full border-t border-gray-400 my-7" />
        <TasksList tasks={tasks} onToggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default Home;
