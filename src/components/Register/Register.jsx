
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
            
            <div className={`${styles.conteiner2}`} >

                <div className="flex flex-row  justify-around items-center">
                    <Input classNames={{base: `${styles.input}`, label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`,}} isRequired="true" type="text" variant={"flat"} ref={nameRef} maxLength="70" label="Nombre" />
                    <Input classNames={{base: `${styles.input}`, label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`,}} isRequired="true" type="tel" variant={"flat"}  ref={celRef} maxLength="20" label="Celular" />
                </div>

                <div className={`flex flex-col justify-evenly items-center ${styles.conteinerDate}`}>
                    <Input classNames={{base: `${styles.inputDate}`,  label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`, }} isRequired="true" placeholder="Dia De Nacimiento" type="date" variant={"flat"} ref={dateRef} maxLength="20" label="Fecha De Nacimiento" />
                </div>
                
            </div>

            <div className={`flex flex-col justify-evenly items-center ${styles.conteiner2}`} >
                <Input classNames={{base: `${styles.inputDate}`,  label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`}} isRequired="true" type="email" variant={"flat"} ref={emailRef} maxLength="100" label="E-mail" />
                <Input classNames={{base: `${styles.inputDate} mt-4`,  label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`}} isRequired="true" type="password" variant={"flat"} ref={passwordRef} maxLength="70" label="password" />

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
        </div>
    </div>
    )
}