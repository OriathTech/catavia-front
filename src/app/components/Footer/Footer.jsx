import styles from "./Footer.module.css";
import { FacebookIcon } from "../icons/FacebookIcon/FacebookIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon/WhatsappIcon";
import { InstagramIcon } from "../icons/InstagramIcon/InstagramIcon";
import { OriathIcon } from "../icons/OriathIcon/OriathIcon";


export default function Footer() {
  return (
    <footer className={`${styles.container}`}>
        <div className={`${styles.container1} container mx-auto`}>

            <div className={styles.containerLeft}>
                <a href="https://www.oriathtech.com.ar/" target="_blank"> 
                    <div className={styles.containerOT}>
                        <OriathIcon height={"2rem"} width={"2rem"}/>
                        <p className="mx-2">Powered by Oriath|Tech</p>
                    </div>
                </a>
            </div>

            <div>
                <p className={styles.textCatavia}>
                    2024 CATAVIA ARTESANAL ™
                </p>
            </div>

            <div className={styles.containerRight}>
                <a className={styles.logoOT} target="_blank" href="https://api.whatsapp.com/send/?phone=5491169206183&text=type=phone_number&app_absent=0"> 
                    <WhatsappIcon/>
                </a>
                <a className={styles.logoOT} target="_blank" href="https://www.instagram.com/catavia.artesanal/"> 
                    <InstagramIcon/>
                </a>
                <a className={styles.logoOT} href="https://www.facebook.com/Postrescatavia"  target="_blank"> 
                    <FacebookIcon/>
                </a>
            </div>
        </div>
    </footer>
  );
}
