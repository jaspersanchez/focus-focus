const BASE_URL = `${import.meta.env.VITE_API_URL}/api/tasks`;

export const createTask = async (payload) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const completeTask = async (id, isCompleted) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tasks/${id}/complete`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted }),
    }
  );
  return res.json();
};

export const getTasks = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`);

  return res.json();
};

export const editTask = async (id, payload) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
