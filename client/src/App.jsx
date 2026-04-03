// import { useEffect, useState } from 'react';
import Layout from './components/Layout';
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
      <Layout>
        <TaskForm />
      </Layout>
    </div>
  );
};

export default App;
