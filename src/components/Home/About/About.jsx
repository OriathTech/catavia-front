 import styles from "./About.module.css"

export default function About() {
return (
    <div className={styles.body}>
        
        <span className={styles.stiker1}>
            <img src="/stiker1.png" alt="" />
        </span>

        <div className={styles.container}>
            <div className={styles.title}>
                <h1>LOREM IPSUM</h1>
            </div>
            <div className={styles.containerText}>
                <p className={styles.text1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus veritatis distinctio, dolorum sed dolor culpa, perspiciatis officiis modi error 
                a similique harum ipsam nesciunt enim laborum, ipsum quisquam voluptas et.</p>
                <p className={styles.text2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Omnis beatae pariatur quod impedit similique dolorem repellendus consequatur quo 
                dignissimos porro suscipit ex, tempore quibusdam. Exercitationem.</p>
            </div>
        </div>

    </div>
    );
}