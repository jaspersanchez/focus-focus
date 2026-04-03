import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-2 mt-6">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
