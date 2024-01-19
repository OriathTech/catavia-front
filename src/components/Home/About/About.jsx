 import styles from "./About.module.css"

export default function About() {
return (
    <div className={styles.body}>
        <div className={`${styles.containerCirculo} container mx-auto`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Bienvenidos a Catavia!</h1>
                </div>

                <div className={styles.containerText}>
                    <p className={styles.text} > 
                    Me gustaría contarte cómo todo esto surgió.
                    </p>
                    <p className={styles.text}>
                    Hace más de tres años que surgió el sueño de transmitir, 
                    esa sensación familiar y hogar que tanto nos llena, desde ese momento, 
                    decidí endulzar tus momentos con mis creaciones. 
                    En Catavia Artesanal, cada postre es más que una delicia; 
                    es una expresión auténtica de mi dedicación. 
                    </p>
                    <p className={styles.subtitle}>
                    Descubre la magia de Catavia Artesanal. 
                    </p>
                </div>

                <div>
                    <img className={styles.logo} src="/cataviaLogo3.png" alt="cataviaLogo" />
                </div>
            </div>
        </div>

    </div>
    );
}