import styles from './button.edit.module.css'

interface IProps{
    name:string;
   // onClick: ()=>void;
    state:boolean;
}
export  const ButtonEdit = (props:IProps)=>{
    return(
        <button
            className={styles.button}
           // onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}
export default ButtonEdit
