// import { useState } from 'react';

import { useState } from 'react';

const TaskCard = ({ task }) => {
  const [showNote, setShowNote] = useState(false);
  // const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  // const handleCompleted = async () => {
  //   const res = await fetch(
  //     `${import.meta.env.VITE_API_URL}/api/tasks/${task._id}`,
  //     {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     }
  //   );
  // };

  return (
    <div className="border border-gray-500 rounded-lg p-4 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-1">
          <input type="checkbox" checked={task.isCompleted} />
          <div className={`${task.isCompleted && 'line-through'}`}>
            {task.title}
          </div>
        </div>

        {task.description && (
          <button
            className="border text-xs font-medium border-blue-400 text-blue-500 hover:text-blue-600 rounded-lg px-2"
            onClick={() => setShowNote(!showNote)}
          >
            Show Note
          </button>
        )}
      </div>
      <div className="">
        {showNote && (
          <div className="bg-gray-100 text-gray-700 rounded-lg p-2">
            {task.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
