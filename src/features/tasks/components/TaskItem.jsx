import { useContext, useEffect, useRef, useState } from "react";
import TasksContext from "../context/TasksContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (!editedText.trim()) {
      handleCancel();
      return;
    }
    dispatch({
      type: "UPDATE_TASK",
      payload: { id: task.id, text: editedText },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  return (
    <li className="mb-3">
      <div className="card p-4 flex items-baseline justify-between ">
        <div className="flex items-center gap-2">
          <input
            id={`task-${task.id}`}
            type="checkbox"
            checked={task.done}
            onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          />

          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") handleCancel();
              }}
            />
          ) : (
            <label
              htmlFor={`task-${task.id}`}
              className={
                task.done ? "line-through text-text-muted" : "text-text-primary"
              }
            >
              {task.text}
            </label>
          )}
        </div>
        {isEditing ? (
          <div className="flex gap-3">
            <button onClick={handleSave}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="green"
                class="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button onClick={handleCancel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="red"
                class="size-5"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button onClick={handleEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="brown"
                className="size-4"
              >
                <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
              </svg>
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="red"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
