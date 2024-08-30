import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/taskform';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleSaveTask = (task) => {
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((newTask) => setTasks([...tasks, newTask]))
      .catch((error) => console.error('Error saving task:', error));
  };

  return (
    <div>
      <h1>Your Tasks</h1>
      <TaskForm onSave={handleSaveTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskListPage;
