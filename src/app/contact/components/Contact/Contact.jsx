
import styles from "./Contact.module.css"
import {Button} from "@nextui-org/button";
import Link from "next/link"

export default function Contact (){

    return(
    <div className={`container mx-auto my-20 p-4 md:p-9 ${styles.container}`} >

        <div className={`grid place-items-center  `}>
            <img src="cataviaLogo2.png" className={styles.img} alt="" />
        </div>

        <div className={`grid place-items-center  `}>
            <p className={`${styles.title} `}>
                ¡¡ Contactame !!
            </p>
        </div>

        <div className={`flex flex-col justify-evenly items-center gap-8 `} >
            <p className={styles.text}>
                ¡Hola y gracias por visitar mi página web!
            </p>

            <p className={styles.text}>
                ¡Estoy encantada de que estés aquí! 
            </p>

            <p className={styles.text}>
                Para realizar un pedido de mis productos, 
                te pido amablemente que lo hagas
                con al menos 3 días de anticipación. De esta manera, 
                puedo asegurarme de prepararlo todo con el cuidado y
                la atención que mereces.
            </p>

            <p className={styles.text}>
                 Recuerda incluir en tu mensaje la fecha y el lugar para el cual deseas solicitar el producto.
            </p>

            <p className={styles.text}>
                ¡No dudes en contactarme a través de los enlaces que encontrarás abajo! 
            </p>
        </div>

        <div className={`flex flex-row justify-evenly items-center ${styles.conteinerBtn}`}>
            <Button isIconOnly  className={styles.btn} color="primary">
                <Link href="https://www.facebook.com/Postrescatavia"  target="_blank"> 
                    <img src="/FooterInstagram.svg" alt="" />
                </Link>
            </Button>

            <Button isIconOnly  className={styles.btn} color="success">
                <Link href="https://api.whatsapp.com/send/?phone=5491169206183&text=type=phone_number&app_absent=0"  target="_blank"> 
                    <img src="/FooterWhatsapp.svg" alt="FooterWhatsapp" />
                </Link>
            </Button>

            <Button isIconOnly  className={styles.btn} color="danger" >
                <Link href="https://www.instagram.com/catavia.artesanal/"  target="_blank"> 
                    <img src="/FooterInstagram.svg" alt="FooterInstagram" />
                </Link>
            </Button>
        </div>
    </div>
    )
}