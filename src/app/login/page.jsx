"use client"
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/session/session";
import { ElementsContext } from "@/context/elements/elements";
import { UsersContext } from "@/context/users/users";

import Link from "next/link"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Toaster, toast } from 'sonner'

import { EyeFilledIcon } from "@/app/components/icons/EyeFilledIcon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/components/icons/EyeSlashFilledIcon/EyeSlashFilledIcon";

import styles from "./page.module.css"

export default function LoginPage() {
  const { loginJWT } = useContext(SessionContext);
  const { getElements } = useContext(ElementsContext);
  const { getUsers } = useContext(UsersContext);
  const router = useRouter();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async () => {
    const info = {
      password: inputPassword,
      email: inputEmail
    }

    const response = await loginJWT(info)
    if (response.status === "success") {
      toast.success(response.message)
      if (response.payload.role === "admin") {
        getElements();
        getUsers();
      }
      return router.push("/products");
    } else {
      toast.error(response.message)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={`container mx-auto my-9 py-9 ${styles.container}`} >
      <Toaster position="top-right" richColors />

      <div className={`grid place-items-center`}>
        <p className={styles.title}>
          Iniciar Sesión
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
          onKeyUp={handleKeyPress}
        />
      </div>

      <div className={`flex flex-col lg:flex-row lg:justify-evenly items-center ${styles.container1}`}>
        <Button className={styles.btn} radius="md" color="default">
          <Link href="/register"> Crear Cuenta</Link>
        </Button>

        <Button type="submit" className={styles.btn} radius="md" color="primary" onClick={handleSubmit}>
          Ingresar
        </Button>
      </div>
    </div>
  )
}