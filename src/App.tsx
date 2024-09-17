import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'
import TaskForm from './components/Form/TaskForm';
import TaskList from './components/List/TaskList';

import {ITask} from './interfaces/ITask'
function App() {
  return <div>
    <Header />
    <main className={styles.main}>
      <TaskForm btnText='Criar Tarefa'/>
      <TaskList />
    </main>
    <Footer />
  </div>
}

export default App;
