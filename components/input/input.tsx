import styles from './input.module.css'
import {FC} from "react";

interface IProps{
    externalValue?:string;
    onChangeInput:(value:string)=>void
}

export const Input: FC<IProps>=({onChangeInput,externalValue})=>{

    const onChange = (event: any)=>{
        onChangeInput(event.target.value)
    }

    return(
        <input
            className={styles.input}
            defaultValue={''}
            value={externalValue}
            type='text'
            onChange={onChange}/>
    )
}
export default Input