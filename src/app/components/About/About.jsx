import styles from "./About.module.css"
import Image from 'next/image'

export default function About() {
    return (

        <div className={`${styles.container}`}>
            <div>
                <h2>
                    Me gustaría contarte cómo todo esto surgió.
                </h2>
                <p>
                    Hace más de tres años que surgió el sueño de transmitir,
                    esa sensación familiar y hogar que tanto nos llena, desde ese momento,
                    decidí endulzar tus momentos con mis creaciones.
                    En Catavia Artesanal, cada postre es más que una delicia;
                    es una expresión auténtica de mi dedicación.
                </p>
                <p>
                    Descubre la magia de Catavia Artesanal.
                </p>
            </div>

            <Image
                className={styles.logo}
                src="/images/logos/cataviaLogo3.png"
                width={176}
                height={221}
                alt="Logo Catavia Artesanal"
            />
        </div>
    );
}