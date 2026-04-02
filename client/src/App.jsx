// import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';

const App = () => {
  // const [status, setStatus] = useState('connecting to server...');

  // useEffect(() => {
  //   const fetchServer = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/health');
  //       const data = await res.json();

  //       setStatus(data.status);
  //     } catch {
  //       setStatus('There is a trouble connecting to the server...');
  //     }
  //   };

  //   fetchServer();
  // }, []);

  return (
    <div>
      <div>
        <h1 className="text-2xl">Focus-focus</h1>
        {/* <p>
          status: <span className="text-green-500">{status}</span>
        </p> */}
      </div>
      <div>
        <TaskForm />
      </div>
    </div>
  );
};

export default App;
