import imageTerapiaCapilar from "../assets/imgServices.svg"
import imageCortes from "../assets/Cortes.svg"
import imageCremes from "../assets/cremes.svg"
import styles from "./Services.module.css"
import { Service } from "./Service"


export function Services() {

    return (
        <section className={styles.services}>

            <header>
                <h2>Serviços</h2>
                <p>
                    Com mais de 10 anos no mercado, o <span>Beautysalon</span> já conquistou clientes de
                    inúmeros países com seus tratamentos exclusivos e totalmente naturais
                </p>
            </header>

            <div className={styles.cards}>
                <Service
                    src={imageTerapiaCapilar}
                    Title={'Terapia capilar'}
                    legend="Terapia completa para couro cabeludo e fios, protegendo todos os tipos
                            de cabelos, inclusive os longos e finos."
                />

                <Service
                    Title="Cortes"
                    src={imageCortes}
                    legend=" A nossa equipe é repleta de profissionais renomados, famosos por lançarem
                            tendências com cortes diferenciados e clássicos."
                />

                <Service
                    Title="Tratamentos"
                    legend=" O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo
                            de cabelo."
                    src={imageCremes}
                />
            </div>

        </section>
    )
}