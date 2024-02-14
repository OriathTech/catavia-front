import styles from "./Welcome.module.css"

export default function Welcome() {
    return (
        <div className={`${styles.background} mx-auto`}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Catavia</h1>
                <h2 className={styles.sub}>Artesanal</h2>
            </div>
            <div className={styles.bannerTop}></div>
            <div className={styles.bannerBottom}></div>
        </div>
    );
}





