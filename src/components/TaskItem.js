import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TaskItem;
