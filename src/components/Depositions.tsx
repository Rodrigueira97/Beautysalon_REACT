import Aspas from "../assets/Aspas.svg"
import Perfil from "../assets/perfil.png"
import styles from "./Depositions.module.css"

export function Depositions() {
    return (
        <section className={styles.depositions}>
            <h2>
                Depoimentos de
                quem já passou
                por aqui
            </h2>

            <div className={styles.testimonial}>
                <p>
                    <img src={Aspas} alt="Aspas" />
                    Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente
                    meu cabelo mudou muito depois que comecei a tratar somente com produtos
                    naturais e veganos. São profissionais incríveis e qualificados.
                </p>
                <p className={styles.person}>
                    <img src={Perfil} alt="foto de perfil"
                    />Wanessa Souza</p>
            </div>
        </section>
    )
}