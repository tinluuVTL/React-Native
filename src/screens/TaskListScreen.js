import React, {useState} from 'react';
import TaskItem from '../components/TaskItem';
const TaskListScreen = () => {
  const [tasks, setTasks] = useState([
    {id: '1', name: 'Buy groceries', completed: false},
    {id: '2', name: 'Go to the gym', completed: true},
    {id: '3', name: 'Read a book', completed: false},
  ]);

  const toggleTaskCompleted = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={toggleTaskCompleted}
        />
      ))}
    </div>
  );
};

export default TaskListScreen;
