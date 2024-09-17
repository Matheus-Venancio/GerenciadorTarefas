import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'
import TaskForm from './components/Form/TaskForm';
import TaskList from './components/List/TaskList';

import {ITask} from './interfaces/ITask'
import Modal from './components/Modal/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] =useState<ITask | null>(null);

  const deleteTask =(id: number) => {
    setTaskList(taskList.filter((task) => {return task.id !== id;}));
  }
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task:ITask):void =>{
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  return <div>
    <Modal children={<TaskForm btnText='Editar Tarefa' task={taskToUpdate} taskList={taskList}/>} />
    <Header />
    <main className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <TaskForm  btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
      <h2>Suas Tarefas:</h2>
      <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
    </main>
    <Footer />
  </div>
}

export default App;
