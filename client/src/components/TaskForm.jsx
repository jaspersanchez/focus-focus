import { useState } from 'react';

const TaskForm = ({ setTasks }) => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [showNote, setShowNote] = useState(false);

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

    const payload = { title, description: note };

    const task = await addTask(payload);

    setTasks((prev) => [task, ...prev]);

    setTitle('');
    setNote('');
    setShowNote(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start gap-2">
      <div className="flex flex-1 flex-col space-y-2">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 rounded-lg px-2 py-1"
          required
        />
        {showNote && (
          <textarea
            placeholder="add note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border border-gray-400 rounded-lg px-2 py-1"
          />
        )}
      </div>
      <div className="flex gap-2">
        <button
          className="text-white px-3 py-1 bg-blue-500 hover:bg-blue-600 transition font-medium rounded-lg"
          type="submit"
        >
          Save
        </button>
        <button
          className={`border font-light px-2 rounded-lg border-emerald-400 text text-green-500 hover:text-green-600 ${showNote && 'bg-emerald-400 text-white hover:bg-emerald-500 hover:text-white'}`}
          type="button"
          onClick={() => setShowNote(!showNote)}
        >
          Note
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
