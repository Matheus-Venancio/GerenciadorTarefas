import React,{useState,ChangeEvent,FormEvent,useEffect} from 'react'
import styles from './TaskForm.module.css'
import {ITask} from '../../interfaces/ITask'

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null;
}

const TaskForm = ({btnText,taskList,setTaskList,task}: Props) =>{

  const [id,setId] =useState<number>(0)
  const [title,setTitle] =useState<string>("")
  const [difficulty,setdifficulty] =useState<number>(0)

  useEffect(()=>{
    if(task){
      setId(task.id)
      setTitle(task.title)
      setdifficulty(task.difficulty)
    }
  }, [task])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
        setTitle(e.target.value)
    }else{
        setdifficulty(Number(e.target.value))
    }
  }
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id =Math.floor(Math.random() * 1000)
    const newTask: ITask={id,title,difficulty}

    //Esta adicionando todas as task e a new task. A ! fala que é certeza que vai vir
    setTaskList!([...taskList,newTask])

    setTitle("")
    setdifficulty(0)
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor='title'>Título</label>
            <input value={title} type="text" name="title" placeholder='Titulo da tarefa' onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor='difficulty'>Dificuldade</label>
            <input value={difficulty} type="text" name="difficulty" placeholder='Dificuldade da tarefa'  onChange={handleChange}/>
        </div>
        <input type='submit' value={btnText} />
    </form>
  )
}

export default TaskForm