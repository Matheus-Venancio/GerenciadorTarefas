import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'
import TaskForm from './components/Form/TaskForm';
import TaskList from './components/List/TaskList';

import {ITask} from './interfaces/ITask'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask =(id: number) => {
    setTaskList(taskList.filter((task) => {return task.id !== id;}));
  }

  return <div>
    <Header />
    <main className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
      <h2>Suas Tarefas:</h2>
      <TaskList taskList={taskList} handleDelete={deleteTask}/>
    </main>
    <Footer />
  </div>
}

export default App;
