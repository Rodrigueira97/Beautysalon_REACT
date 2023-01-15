import styles from "./Home.module.css"
import Image from "../assets/cabeleireira-secando-cliente.png"
import { Button } from "./Button"

export function Home() {
    return (
        <div>
            <section className={styles.home}>
                <header>
                    <svg width="337" height="243" viewBox="0 0 337 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.106445" width="347.894" height="242.269" rx="4" fill="#CCF4E6" />
                    </svg>
                    <img src={Image} alt="Cabeleireira secando o cliente" />
                </header>

                <div className={styles.content}>
                    <h1>Saúde natural para os seus cabelos</h1>
                    <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                    <Button text='Agendar um horário'></Button>
                </div>
            </section>
        </div>
    )
}