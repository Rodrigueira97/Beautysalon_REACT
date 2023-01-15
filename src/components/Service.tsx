import styles from "./Service.module.css"


interface Props {
    Title: string,
    legend: string,
    src: string
}


export function Service(props: Props) {

    return (
        <div className={styles.service}>
            <img src={props.src} />
            <h3>{props.Title}</h3>
            <p>
                {props.legend}
            </p>
        </div>
    )
}