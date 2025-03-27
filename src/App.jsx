import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programacao",
      description: "Estudar Prog pra virar dev",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Calculo",
      description: "Estudar Calc pra passar na prova",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Alg.Linear",
      description: "Estudar Alg.Linear pra passar na prova",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDelTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDelTaskClick={onDelTaskClick}
        />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
