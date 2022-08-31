import {ButtonEdit} from "../components/button.edit/button.edit";
import Input from "../components/input/input";

const  ToDo = () => {
    return(
        <div className="layout_body">
            <div className="layout__list">
                <div className="layout__list_do">
                    <h1>Do</h1>
                    <div className="layout__list_do_task"></div>
                </div>
                <div className="layout__list_done">
                    <h1>Done</h1>
                    <div className="layout__list_done_task"></div>
                </div>
            </div>
            <div className="layout__input">
                <Input/>
                <ButtonEdit name={'Add'} state={false}/>

            </div>
        </div>
    )
}
export default ToDo