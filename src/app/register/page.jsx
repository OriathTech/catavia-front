"use client"
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/session/session";

import Link from "next/link"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Toaster, toast } from "sonner";

import { EyeFilledIcon } from "@/app/components/icons/EyeFilledIcon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/components/icons/EyeSlashFilledIcon/EyeSlashFilledIcon";

import styles from "./page.module.css"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useContext(SessionContext)

  const [inputName, setInputName] = useState(null);
  const [inputCell, setInputCell] = useState(null);
  const [inputDate, setInputDate] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPassword, setInputPassword] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async () => {
    const info = {
      name: inputName,
      password: inputPassword,
      email: inputEmail,
      birthday: inputDate,
      whatsapp: inputCell
    }

    const response = await register(info)
    if (response.status === "success") {
      toast.success(response.message)
      router.push("/products")
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
    <div className={`container mx-auto my-20 p-4 ${styles.container}`} >
      <Toaster position="top-right" richColors />
      <div className={`grid place-items-center  ${styles.container1}`}>
        <p className={styles.title}>
          Crear Cuenta
        </p>
      </div>

      <div className={`${styles.container2}`} >

        <div className="flex flex-row  justify-between lg:justify-around items-center">
          <Input
            classNames={{
              base: `${styles.input}`,
              label: `${styles.label}`,
              inputWrapper: `${styles.inputWrapper}`
            }}
            isRequired={true}
            type="text"
            variant={"flat"}
            maxLength="70"
            label="Nombre"
            onValueChange={setInputName}
          />
          <Input
            classNames={{
              base: `${styles.input}`,
              label: `${styles.label}`,
              inputWrapper: `${styles.inputWrapper}`
            }}
            isRequired={true}
            type="tel"
            variant={"flat"}
            maxLength="20"
            label="Whatsapp"
            onValueChange={setInputCell}
          />
        </div>

        <div className={`flex flex-col justify-evenly items-center ${styles.containerDate}`}>
          <Input
            classNames={{
              base: `${styles.inputDate}`,
              label: `${styles.label}`,
              inputWrapper: `${styles.inputWrapper}`
            }}
            isRequired={true}
            placeholder="Dia De Nacimiento"
            type="date"
            variant={"flat"}
            maxLength="20"
            label="Fecha De Nacimiento"
            onValueChange={setInputDate}
          />
        </div>

      </div>

      <div className={`flex flex-col justify-evenly items-center ${styles.container2}`} >
        <Input
          classNames={{
            base: `${styles.inputDate}`,
            label: `${styles.label}`,
            inputWrapper: `${styles.inputWrapper}`
          }}
          isRequired={true}
          type="email"
          variant={"flat"}
          maxLength="100"
          label="Email"
          onValueChange={setInputEmail}
        />
        <Input
          classNames={{
            base: `${styles.inputDate} mt-4`,
            label: `${styles.label}`,
            inputWrapper: `${styles.inputWrapper}`
          }}
          isRequired={true}
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
          variant={"flat"}
          maxLength="70"
          label="Contraseña"
          onValueChange={setInputPassword}
          onKeyUp={handleKeyPress}
        />
      </div>

      <div className={`flex flex-col lg:flex-row md:justify-evenly items-center ${styles.container3}`}>

        <Button className={`mb-3 lg:mb-0 ${styles.btn}`} radius="md" color="default">
          <Link href="/login"> Login</Link>
        </Button>

        <Button onClick={handleSubmit} className={styles.btn} radius="md" color="primary">
          Registrarse
        </Button>
      </div>
    </div>
  )
}