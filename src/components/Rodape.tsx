import Logo from "../assets/Logo.svg"
import Instagram from "../assets/instagram 1.svg"
import facebook from "../assets/facebook 1.svg"
import youtube from "../assets/youtube 1.svg"
import styles from "./Rodape.module.css"

export function Rodape() {


    return (
        <footer className={styles.rodape}>
            <img src={Logo} alt="Logo" />

            <div className={styles.autorais}>
                <p>©2021 Beautysalon.</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <ul>
                <li><img src={Instagram} alt="Link para o Instagram da pagina" /></li>
                <li><img src={facebook} alt="Link para o facebook da pagina" /></li>
                <li><img src={youtube} alt="Link para o youtube da pagina" /></li>
            </ul>
        </footer>

    )
}