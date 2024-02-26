"use client"
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/session/session";

import Link from "next/link"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { EyeFilledIcon } from "@/app/components/icons/EyeFilledIcon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/components/icons/EyeSlashFilledIcon/EyeSlashFilledIcon";

import styles from "./LoginForm.module.css"

export default function LoginForm() {
    const { loginJWT } = useContext(SessionContext)
    const router = useRouter()
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("")
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async () => {
        const info = {
            password: inputPassword,
            email: inputEmail
        }

        const response = await loginJWT(info)
        console.log(response)
        if (response.status === "success") {
            console.log("te has logeado")
            router.push("/products")
        }
    }

    return (
        <div className={`container mx-auto my-9 py-9 ${styles.container}`} >

            <div className={`grid place-items-center`}>
                <img className={`${styles.img} mb-4`} src="/cataviaLogo2.png" alt="" />
                <p className={styles.title}>
                    Login
                </p>
            </div>

            <div className={`flex flex-col items-center ${styles.container2}`} >
                <Input
                    classNames={{
                        base: `${styles.input2}`,
                        label: `${styles.label}`,
                        inputWrapper: `${styles.inputWrapper}`
                    }}
                    isRequired={true}
                    label="Email"
                    type="email"
                    onValueChange={setInputEmail}
                />

                <Input
                    classNames={{
                        base: `${styles.input2}`,
                        label: `${styles.label}`,
                        inputWrapper: `${styles.inputWrapper}`
                    }}
                    className="mt-4"
                    isRequired={true}
                    label="Contraseña"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    maxlength="30"
                    onValueChange={setInputPassword}
                />
            </div>

            <div className={`flex flex-col lg:flex-row lg:justify-evenly items-center ${styles.container1}`}>
                <Button className={styles.btn} radius="md" color="primary">
                    <Link href="/register"> Crear Cuenta</Link>
                </Button>

                <Button type="submit" className={styles.btn} radius="md" color="primary" onClick={handleSubmit}>
                    Ingresar
                </Button>
            </div>
        </div>
    )
}