import TaskItem from "./TaskItem";

function TasksList({ tasks, onToggleTask }) {
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
          <TaskItem key={t.id} task={t} onToggleTask={onToggleTask} />
        ))}
      </ul>
    </>
  );
}

export default TasksList;
