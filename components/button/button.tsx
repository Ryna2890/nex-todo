import styles from './button.module.css'

interface IProps{
    name:string;
    onClick: ()=>void;
}
export  const Button = (props:IProps)=>{
    return(
        <button
            className={styles.button}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}