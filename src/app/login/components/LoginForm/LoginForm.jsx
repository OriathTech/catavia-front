
import styles from "./LoginForm.module.css"
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from "next/link"

export default function LoginForm (){

    return(
    <div className={`container mx-auto mb-4 p-7 border-4 ${styles.conteiner}`} >

        <div className={`grid place-items-center  ${styles.conteiner1}`}>
            <p className={styles.title}>
                Registro
            </p>
        </div>

        <div className={`flex flex-col justify-evenly items-center ${styles.conteiner2}`} >

            <input className={styles.input2} placeholder="E-mail" type="email" name="email" id="email" />
            <input className={`flex flex-row justify-evenly items-center ${styles.conteinerDate} ${styles.input2}`} placeholder="password"  type="password" id="password" name="password" maxlength="30"/>

        </div>

        <div className={`flex flex-row md:justify-evenly items-center ${styles.conteiner1}`}>
            <Button className={styles.btn} radius="md" color="primary">
                <Link href="/register"> Registrarce</Link>
            </Button>

            <img className={`${styles.img}`} src="/cataviaLogo3.png" alt="" />

            <Button className={styles.btn} radius="md" color="primary">
                <Link href="/"> Login</Link>
            </Button>
        </div>
    </div>
    )
}