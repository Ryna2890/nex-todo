import styles from './todoTask.module.css'
import {FC} from "react";

export interface ITask{
    title:string;
    id:number;
    completed:boolean;
}
interface ToDoTaskProps{
    task:ITask
}

export const TodoTask:FC<ToDoTaskProps> = ({task})=>{
    return(
        <div className={styles.task} id={task.id.toString()}>
            <div className={`${styles.task__text} ${task.completed ? styles.done: styles.do}`} >
                {task.title}
            </div>
        </div>
    )
}

export default TodoTask