import Image from '../assets/cabelereira.png'
import styles from "./About.module.css"

export function About() {


    return (
        <section className={styles.about}>

            <header>
                <img src={Image} alt="Foto de  três cabelereiras" />
            </header>

            <div>
                <h2>Sobre nós</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id
                    accumsan
                    felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque.
                    Nullam in
                    est
                    porta, pellentesque massa vitae, vehicula risus. <br /><br />

                    In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui.
                    Vestibulum id
                    ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae
                    feugiat
                    enim augue sed. <br /><br />

                    Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum.
                    Sed
                    sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl
                    nulla
                    tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper
                    luctus.
                </p>
            </div>
        </section>
    )
}