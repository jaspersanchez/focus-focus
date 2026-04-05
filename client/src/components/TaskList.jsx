import TaskCard from './TaskCard';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-sm text-gray-400">
        No tasks yet. Add your first task above.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onComplete={onComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
