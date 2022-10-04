import styles from './delete.button.module.css'

interface DProps {
    onClick:()=>void;
}
export const DeleteButton = (props:DProps)=> {
    return (
        <button className={styles.delete_button} onClick={props.onClick}>
            <span className={styles.tooltipText}>Press to delete</span>
            <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 5H3M3 5H19M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V5H3ZM6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M8 10V16M12 10V16"
                    stroke="#A5A6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default DeleteButton