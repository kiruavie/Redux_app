// Task.js

import React, { useState } from "react";

const Task = ({ task, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      editTask(task.id, description);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDescription(task.description);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggle}
          />
          <span onDoubleClick={handleDoubleClick}>{task.description}</span>
        </div>
      )}
    </li>
  );
};

export default Task;
