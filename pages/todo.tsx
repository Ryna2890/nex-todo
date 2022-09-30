import {ButtonEdit} from "../components/button.edit/button.edit";
import Input from "../components/input/input";
import {useEffect, useState} from "react";
import TodoTask, {ITask} from "../components/todo.task/todoTask";



const  ToDo = () => {
    const [tasks, setTasks]=useState<ITask[]>([])
    const [value, setValue] = useState<string>()
    const unicId = Date.now();

    const handlerValueChange =(item:string)=>{
        setValue(item)
    }
    const getCompletedTasks=(tasks?:ITask[]):ITask[]=>{
       if (!tasks){return []}
        return tasks.filter((task) => task.completed)
    }
    const getUnCompletedTasks=(tasks?:ITask[]):ITask[]=>{
        if (!tasks){return []}
        return tasks.filter((task) => !task.completed)
    }
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

    const handelButtonClick=()=>{
        if(!value){return}
        const taskParams:ITask={
            title:value,
            completed:false,
            id: unicId,
        }
        setTasks([taskParams])
    }

    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`, {

            }).then((res)=>res.json())
            .then((res)=>setTasks(res))
            .catch((error) => console.error(error));
        },
        []
    )
    return(
        <div className="layout_body">
            <div className="layout__list">
                <div className="layout__list_do">
                    <h1>Do</h1>
                    <div className="layout__list_do_task">
                        {getCompletedTasks(tasks).map((task)=>(
                            <TodoTask task={task} key={unicId}/>
                        ))}
                    </div>
                </div>
                <div className="layout__list_done">
                    <h1>Done</h1>
                    <div className="layout__list_done_task">
                        {getUnCompletedTasks(tasks).map((task)=>(
                            <TodoTask task={task} key={unicId}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="layout__input">
                <Input externalValue={value} onChangeInput={handlerValueChange}/>
                <ButtonEdit name={'Add'} onClick={handelButtonClick}/>
            </div>
        </div>
    )
}
export default ToDo