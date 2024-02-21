
import styles from "./LoginForm.module.css"
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import Link from "next/link"
import { useRef } from "react";

export default function LoginForm (){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return(
    <div className={`container mx-auto my-9 py-9 ${styles.conteiner}`} >

        <div className={`grid place-items-center  ${styles.conteiner1}`}>
            <img className={`${styles.img} mb-4`} src="/cataviaLogo2.png" alt="" />
            <p className={styles.title}>
                Login
            </p>
        </div>

        <div className={`flex flex-col items-center ${styles.conteiner2}`} >

            <Input classNames={{base: `${styles.input2}`, label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`,}} ref={emailRef} isRequired={true} label="Email" type="email" name="email" id="email" />
            <Input classNames={{base: `${styles.input2}`, label: `${styles.label}`, inputWrapper: `${styles.inputWrapper}`,}} ref={passwordRef} className="mt-4" isRequired={true} label="password"  type="password" id="password" name="password" maxlength="30"/>

        </div>

        <div className={`flex flex-col lg:flex-row lg:justify-evenly items-center ${styles.conteiner1}`}>
            <Button className={styles.btn} radius="md" color="primary">
                <Link href="/register"> Registrarce</Link>
            </Button>

            <Button className={styles.btn} radius="md" color="primary">
                <Link href="/"> Login</Link>
            </Button>
        </div>
    </div>
    )
}