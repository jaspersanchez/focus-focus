import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import TaskForm from './TaskForm';

const TaskCard = ({ task, onEdit, onComplete, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-xl px-4 py-3 flex flex-col gap-2">
      {/* top row */}
      {!showEdit && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => onComplete(task._id, task.isCompleted)}
            className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
              task.isCompleted
                ? 'bg-emerald-100 border-emerald-500'
                : 'border-gray-400 hover:border-gray-500'
            }`}
          >
            {task.isCompleted && (
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>

          <span
            className={`text-md flex-1 ${task.isCompleted ? 'line-through text-gray-400' : 'text-gray-600'}`}
          >
            {task.title}
          </span>

          <button
            onClick={() => setShowEdit(true)}
            className="text-md text-gray-500 hover:text-gray-700 transition-colors rounded py-1 cursor-pointer"
          >
            <CiMenuKebab />
          </button>
        </div>
      )}

      {/* always visible note */}
      {task.description && !showEdit && (
        <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
          {task.description}
        </div>
      )}

      {/* edit form */}
      {showEdit && (
        <TaskForm
          onClose={() => setShowEdit(false)}
          onDelete={() => onDelete(task._id)}
          onSubmit={onEdit}
          task={task}
        />
      )}
    </div>
  );
};

export default TaskCard;
