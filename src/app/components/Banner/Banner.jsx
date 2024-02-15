import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <div className={`${styles.background} mx-auto`}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>CATAVIA</h1>
                <h2 className={styles.sub}>Artesanal</h2>
            </div>
            <div className={styles.bannerTop}></div>
            <div className={styles.bannerBottom}></div>
        </div>
    );
}





