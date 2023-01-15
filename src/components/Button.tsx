import styles from "./Button.module.css"

interface buttonText {
    text:string;
}

export function Button(props:buttonText) {


    return (
        <button className={styles.button}>
            {props.text}
        </button>
    )
}