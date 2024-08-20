"use client";

import { useState } from "react";

// import { useMutation, useQuery } from "convex/react";
// import { api } from "../../../convex/_generated/api";

// Define the type for a task object
interface Task {
  _id: string;
  text: string;
}

// Initial demo tasks data
const initialTasks = [
  { _id: "task1", text: "Learn Next.js" },
  { _id: "task2", text: "Build a Convex App" },
  { _id: "task3", text: "Deploy to Vercel" },
];

const TasksPage = () => {
  // const tasks = useQuery(api.tasks.getTasks);
  // const deleteTask = useMutation(api.tasks.deleteTask);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Simulate deleteTask mutation
  const deleteTask = (id: string) => {
    // Update the tasks state to remove the task with the given id
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-5xl">All tasks are here in real-time</h1>
      {tasks?.map((task) => (
        <div key={task._id} className="flex gap-2">
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task._id)}>Delete Task</button>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
