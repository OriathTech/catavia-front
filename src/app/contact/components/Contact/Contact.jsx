
import styles from "./Contact.module.css"
import { Button } from "@nextui-org/button";
import Link from "next/link"
import { WhatsappIcon } from "@/app/components/icons/WhatsappIcon/WhatsappIcon";
import { InstagramIcon } from "@/app/components/icons/InstagramIcon/InstagramIcon";
import { FacebookIcon } from "@/app/components/icons/FacebookIcon/FacebookIcon";

export default function Contact() {

    return (
        <div className={`container mx-auto my-20 p-4 md:p-9 ${styles.container}`} >

            <div className={`grid place-items-center  `}>
                <img src="cataviaLogo2.png" className={styles.img} alt="" />
            </div>

            <div className={`grid place-items-center  `}>
            <p className={`${styles.title} `}>
            ¡Qué alegría verte por aquí!
            </p>
        </div>

            <div className={`flex flex-col justify-evenly items-center gap-8 `} >

                <p className={styles.text}>
                Si estás pensando en deleitarte con mis deliciosos productos, ¡has llegado al lugar indicado!
                </p>

                <p className={styles.text}>
                Estoy aquí para ayudarte en lo que necesites. Si tienes consultas sobre nuestros productos, el estado de tus pedidos o cualquier otra consulta, no dudes en ponerte en contacto conmigo. Estaré encantada de resolver cualquier duda que tengas. 
                </p>

                <p className={styles.text}>
                    ¡contactame a través de los enlaces que encontrarás aqui abajo!
                </p>
            </div>

            <div className={`flex flex-row justify-evenly items-center ${styles.conteinerBtn}`}>
                <Button isIconOnly className={styles.btn} color="primary">
                    <Link href="https://www.facebook.com/Postrescatavia" target="_blank">
                        <FacebookIcon />
                    </Link>
                </Button>

                <Button isIconOnly className={styles.btn} color="success">
                    <Link href="https://api.whatsapp.com/send/?phone=5491169206183&text=type=phone_number&app_absent=0" target="_blank">
                        <WhatsappIcon />
                    </Link>
                </Button>

                <Button isIconOnly className={styles.btn} color="danger" >
                    <Link href="https://www.instagram.com/catavia.artesanal/" target="_blank">
                        <InstagramIcon />
                    </Link>
                </Button>
            </div>
        </div>
    )
}