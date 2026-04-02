import { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = async (payload) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, description };

    const task = await addTask(payload);

    console.log(task);

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default TaskForm;
