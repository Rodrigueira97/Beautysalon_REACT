import iconeDoZap from "../assets/iconeDoZap.svg"
import Telefone from "../assets/Telefone.svg"
import localizacao from "../assets/Localizacao.svg"
import email from "../assets/e-mail.svg"
import styles from "./Contact.module.css"
import { Button } from "./Button"


export function Contact() {
    return (
        <section className={styles.contact}>


            <header>
                <h2>
                    Entre em contato
                    com a gente!
                </h2>
                <p>
                    Entre em contato com a Beautysalon,
                    queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
                </p>

                <Button text="Entrar em contato"/>

            </header>

            <div className={styles.content}>
                <ul>
                    <li>
                        <img src={Telefone} alt=" Telefone" />
                        <p> 11 99845-6754</p>
                    </li>
                    <li>
                        <img src={localizacao} alt=" localizacao" />
                        <p> R. Amauri Souza, 346</p>
                    </li>
                    <li>
                        <img src={email} alt=" E-mail" />
                        <p> contato@beautysalon.com</p>
                    </li>
                </ul>
            </div>

        </section>
    )
}