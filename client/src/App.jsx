// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import Layout from './components/Layout';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`);

        const data = await res.json();

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <Layout>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} />
      </Layout>
    </div>
  );
};

export default App;
