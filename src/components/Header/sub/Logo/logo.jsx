import styles from "./logo.module.css"


export default function Logo() {
    return (
        <section className={styles.containerlogo}>
            <img
            className={styles.imglogo}
            src="/cataviaLogo.jpeg" // Ruta de la imagen
            alt="cataviaLogo" // Texto alternativo
            width={200} // Ancho de la imagen
            height={200} // Altura de la imagen
            />
        </section>
    );
  }
