function TaskItem({ task, onToggleTask }) {
  return (
   
      <li key={task.id} className="mb-3">
        <div className="card p-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleTask(task.id)}
          />

          <label
          htmlFor={`task-${task.id}`}
            className={`${task.done ? "line-through text-text-muted" : "text-text-primary"}`}
          >
            {task.text}
          </label>
        </div>
      </li>

  );
}

export default TaskItem;
