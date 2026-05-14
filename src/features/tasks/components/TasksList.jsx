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
          <li key={t.id} className="mb-3">
            <div className="card p-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => onToggleTask(t.id)}
              />

              <span
                className={`${t.done ? "line-through text-text-muted" : "text-text-primary"}`}
              >
                {t.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
