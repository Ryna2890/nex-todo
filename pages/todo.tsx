import { ButtonEdit } from "../components/button.edit/button.edit";
import Input from "../components/input/input";
import { useCallback, useEffect, useState } from "react";
import TodoTask, { ITask } from "../components/todo.task/todoTask";
import { getCompletedTasks, getUnCompletedTasks } from "./utils";

const ToDo = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [value, setValue] = useState<string>("");
  const uniqId = Date.now();

  const handlerValueChange = (item: string) => {
    setValue(item);
  };

  const handlerTaskChange = useCallback(
    (task: ITask) => {
      setTasks((prevState) => {
        const { completed, ...rest } = task;
        const newEl: ITask = { completed: !task.completed, ...rest };

        const newState: ITask[] = prevState.filter((el) => el.id !== task.id);
        const resultState: ITask[] = [...newState, newEl];

        return resultState;
      });
    },
    [setTasks]
  );

  const handlerDeleteTask = useCallback(
    (task: ITask) => {
      setTasks((prevState) => {
        const newState = prevState.filter((el) => el.id !== task.id);
        return newState;
      });
    },
    [setTasks]
  );

  // const create = (params:ITask)=> {
  //     fetch(`https://jsonplaceholder.typicode.com/todos`, {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json;charset=utf-8',
  //         },
  //         body: JSON.stringify({
  //             title: params.title,
  //             completed: params.completed,
  //             id: params.id,
  //         }),
  //     })
  //         .then((response) => response.json())
  //         .then((responseJsonData) => {
  //             console.log(responseJsonData);
  //         })
  //         .catch((error) => console.error(error));
  // }

  const handelButtonClick = () => {
    if (!value) {
      return;
    }
    const taskParams: ITask = {
      title: value,
      completed: false,
      id: uniqId,
    };
    setTasks((prevState) => [...prevState, taskParams]);
    setValue("");
  };

  //
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`, {})
  //     .then((res) => res.json())
  //     .then((res) => setTasks(res))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="layout_body">
      <div className="layout__list">
        <div className="layout__list_do">
          <h1>Do</h1>
          <div className="layout__list_do_task">
            {getCompletedTasks(tasks).map((task, index) => (
              <TodoTask
                task={task}
                key={index}
                onChange={handlerTaskChange}
                onClick={handlerDeleteTask}
              />
            ))}
          </div>
        </div>
        <div className="layout__list_done">
          <h1>Done</h1>
          <div className="layout__list_done_task">
            {getUnCompletedTasks(tasks).map((task, index) => (
              <TodoTask
                task={task}
                key={index}
                onChange={handlerTaskChange}
                onClick={handlerDeleteTask}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="layout__input">
        <Input value={value} onChange={handlerValueChange} />
        <ButtonEdit name={"Add"} onClick={handelButtonClick} />
      </div>
    </div>
  );
};
export default ToDo;
