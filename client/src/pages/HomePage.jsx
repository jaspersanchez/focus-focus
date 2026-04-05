import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import {
  completeTask,
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from '../api/tasks';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  // handlers
  const handleCreate = async (payload) => {
    const newTask = await createTask(payload);

    setTasks((prev) => [newTask, ...prev]);
  };

  const handleEdit = async (id, payload) => {
    const editedTask = await editTask(id, payload);

    setTasks((prev) =>
      prev.map((t) => (t._id === editedTask._id ? editedTask : t))
    );
  };

  const handleComplete = async (id, isCompleted) => {
    const data = await completeTask(id, !isCompleted);

    setTasks((prev) => prev.map((t) => (t._id === data._id ? data : t)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);

    setTasks((prev) => prev.filter((t) => t._id !== id));
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
            onClose={() => setShowForm(false)}
            onSubmit={handleCreate}
          />
        </div>
      )}
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default HomePage;
