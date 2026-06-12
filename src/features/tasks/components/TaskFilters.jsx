import React, { useContext } from "react";
import TasksContext from "../context/TasksContext";

const filters = ["All", "Active", "Completed"];

function TaskFilters() {
  const { filter, dispatch } = useContext(TasksContext);

  return (
    <div className="flex gap-2 card p-1 rounded-lg">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: f.toLowerCase() })
          }
          className={`flex-1  btn py-2 text-sm font-medium   ${
            filter === f.toLowerCase()
              ? "btn--secondary"
              : "btn--outline text-text-tertiary"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
