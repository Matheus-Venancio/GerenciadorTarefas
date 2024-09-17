import React,{useState,ChangeEvent,FormEvent,useEffect} from 'react'
import styles from './TaskForm.module.css'
import {ITask} from '../../interfaces/ITask'
type Props = {btnText: string}

const TaskForm = ({btnText}: Props) =>{

  const [id,setId] =useState<number>(0)
  const [title,setTitle] =useState<string>("")
  const [difficulty,setdifficulty] =useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
        setTitle(e.target.value)
    }else{
        setdifficulty(Number(e.target.value))
    }
  }
  const addTaskHandler = () => {

  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor='title'>Título</label>
            <input type="text" name="title" placeholder='Titulo da tarefa' onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor='difficulty'>Dificuldade</label>
            <input type="text" name="difficulty" placeholder='Dificuldade da tarefa'  onChange={handleChange}/>
        </div>
        <input type='submit' value={btnText} />
    </form>
  )
}

export default TaskForm