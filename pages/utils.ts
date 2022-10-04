import { ITask } from "../components/todo.task/todoTask";

export const getCompletedTasks = (tasks?: ITask[]): ITask[] => {
  if (!tasks) {
    return [];
  }
  return tasks.filter((task) => !task.completed);
};

export const getUnCompletedTasks = (tasks?: ITask[]): ITask[] => {
  if (!tasks) {
    return [];
  }
  return tasks.filter((task) => task.completed);
};
