import styles from "./todoTask.module.css";
import { FC } from "react";
import DeleteButton from "../delete.button/delete.button";
import CustomCheckbox from "../custom.checkbox/custom.checkbox";

export interface ITask {
  title: string;
  id: number;
  completed: boolean;
}

interface ToDoTaskProps {
  task: ITask;
  onChange: (task: ITask) => void;
  onClick: (task: ITask) => void;
}

export const TodoTask: FC<ToDoTaskProps> = ({ task, onChange, onClick }) => {
  return (
    <div className={styles.task} id={task.id.toString()}>
      <CustomCheckbox
        isChecked={task.completed}
        onChange={() => onChange(task)}
      />
      <div
        className={`${styles.task__text} ${
          task.completed ? styles.done : styles.do
        }`}
      >
        {task.title}
      </div>
      <DeleteButton onClick={() => onClick(task)} />
    </div>
  );
};

export default TodoTask;
