import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
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

  const handleCreate = async (payload) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const newTask = await res.json();
      setTasks((prev) => [newTask, ...prev]);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-2.5 text-sm text-gray-400 border border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:text-gray-600 transition-colors mb-6"
        >
          + Add task
        </button>
      )}

      {showForm && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
          <TaskForm
            onSubmit={handleCreate}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default HomePage;
