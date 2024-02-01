
import styles from "./register.module.css"
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from "next/link"
import { useRef } from "react";
import {Input} from "@nextui-org/input";

export default function Register (){
    const nameRef = useRef(null);
    const celRef = useRef(null);
    const dateRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    

    return(
    <div className={`container mx-auto my-20 p-4 ${styles.conteiner}`} >

        <div className={`grid place-items-center  ${styles.conteiner1}`}>
            <p className={styles.title}>
                Registro
            </p>

            <form action="" >
                <div className={`${styles.conteiner2}`} >

                    <div className="flex flex-row  justify-around items-center">
                        <Input className={`${styles.input}`} type="email" variant={"underlined"} ref={nameRef} maxLength="70" label="Nombre" />
                        <Input className={`${styles.input}`} type="tel" variant={"underlined"} ref={celRef} maxLength="20" label="Celular" />
                    </div>

                    <div className={`flex flex-col justify-evenly items-center ${styles.conteinerDate}`}>
                        <p className={styles.text}>Fecha de nacimiento</p>
                        <input className={styles.inputDate} ref={dateRef} type="date" name="date" id="date" />
                    </div>
                    
                </div>

                <div className={`flex flex-col justify-evenly items-center ${styles.conteiner2}`} >

                    <input className={styles.input2} ref={emailRef} placeholder="E-mail" type="email" name="email" id="email" />
                    <input className={`flex flex-row justify-evenly items-center ${styles.conteinerDate} ${styles.input2}`} ref={passwordRef} placeholder="password"  type="password" id="password" name="password" maxLength="30"/>

                </div>

                <div className={`flex flex-row md:justify-evenly items-center ${styles.conteiner3}`}>

                    <Button className={styles.btn} radius="md" color="primary">
                        <Link href="/login"> Login</Link>
                    </Button>

                    <img className={`${styles.img}`} src="/cataviaLogo3.png" alt="" />

                    <Button className={styles.btn} radius="md" color="primary">
                        Registrarse
                    </Button>

                </div>
            </form>
        </div>
    </div>
    )
}