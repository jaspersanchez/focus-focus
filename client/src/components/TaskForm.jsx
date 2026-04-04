import { useState } from 'react';

const TaskForm = ({ onSubmit, onCancel, task = null }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-gray-400"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        placeholder="Description (optional)"
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-500 outline-none focus:border-gray-400 resize-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="text-xs font-medium border text-gray-700 border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
        >
          {task ? 'Save changes' : 'Add task'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors px-2"
        >
          Cancel
        </button>
        {task && (
          <button
            type="button"
            className="text-xs text-red-400 border border-red-300 rounded-lg hover:text-red-500 transition-colors px-2 ml-auto"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
