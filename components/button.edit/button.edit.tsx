import styles from './button.edit.module.css'


interface EProps{
    name:string;
    onClick:()=>void;
}
export  const ButtonEdit = (props:EProps)=>{

    return(
        <button onClick={props.onClick}
            className={styles.button}
        > {props.name}
        </button>
    )
}
export default ButtonEdit
