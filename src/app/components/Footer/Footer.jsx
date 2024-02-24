import Link from "next/link";
import styles from "./Footer.module.css";
import { StrawberryIcon } from "@/app/admin/components/icons/StrawberryIcon/StrawberryIcon";


export default function Footer() {
  return (
    <footer className={`${styles.container}`}>
        <div className={`${styles.container1} container gap-4`}>

            <div className={styles.containerLeft}>
                <Link href="https://www.oriathtech.com.ar/"> 
                    <div className={styles.containerOT}>
                        <img className={styles.logoOT} src="./FooterLogoOT.svg" width="25" height="25" alt="logo catavia footer" />
                        <p>Powered by Oriath|Tech</p>
                    </div>
                </Link>
            </div>

            <div>
                <p className={styles.textCatavia}>
                    2024 CATAVIA ARTESANAL ™
                </p>
            </div>

            <div className={styles.containerRight}>
                <Link className={styles.logoOT} target="_blank" href="https://api.whatsapp.com/send/?phone=5491169206183&text=type=phone_number&app_absent=0"> 
                    <StrawberryIcon/>
                </Link>
                <Link className={styles.logoOT} target="_blank" href="https://www.instagram.com/catavia.artesanal/"> 
                    <StrawberryIcon/>
                </Link>
                <Link className={styles.logoOT} href="https://www.facebook.com/Postrescatavia"  target="_blank"> 
                    <StrawberryIcon/>
                </Link>
            </div>
        </div>
    </footer>
  );
}
