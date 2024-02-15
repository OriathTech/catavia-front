import Link from "next/link";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer>
        <div className={styles.container}>

            <div className={styles.containerLeft}>
                <p className={styles.textCatavia}>
                     Catavia
                </p>
                <p>
                    Panaderia Artesanal
                </p>
            </div>

            <div>
                <Link  href="/"> 
                    <div >
                        <img className={styles.imglogo} src="./cataviaLogo2.png" width="150" height="150" alt="logo catavia footer" />
                    </div>
                </Link>
            </div>

            <div className={styles.containerRight}>
                <Link className={styles.Link} target="_blank" href="https://api.whatsapp.com/send/?phone=5491169206183&text=type=phone_number&app_absent=0"> 
                    <div className={styles.containerliks}>
                        <span>Whatsapp</span>
                        <img className={styles.logoOT} src="./FooterWhatsapp.svg" width="25" height="25" alt="logo catavia footer" />
                    </div>
                </Link>
                <Link className={styles.Link} target="_blank" href="https://www.instagram.com/catavia.artesanal/"> 
                    <div className={styles.containerliks}>
                        <span >Instagram</span>
                        <img className={styles.logoOT} src="./FooterInstagram.svg" width="25" height="25" alt="logo catavia footer" />
                    </div>
                </Link>
                <Link className={styles.Link} href="https://www.facebook.com/Postrescatavia"  target="_blank"> 
                    <div className={styles.containerliks}>
                        <span>Facebook</span>
                        <img className={styles.logoOT} src="./FooterWhatsapp.svg" width="25" height="25" alt="logo catavia footer" />
                    </div>
                </Link>
                <Link href="https://www.oriathtech.com.ar/"> 
                    <div className={styles.containerOT}>
                        <span >Realizado por Oriath|TECH</span>
                        <img className={styles.logoOT} src="./FooterLogoOT.svg" width="25" height="25" alt="logo catavia footer" />
                    </div>
                </Link>
            </div>
        </div>
    </footer>
  );
}
